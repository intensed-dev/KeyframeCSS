(function () {
  const RAF = requestAnimationFrame;

  const Ease = {
    linear: t => t,
    sine: t => 0.5 - Math.cos(Math.PI * t) / 2
  };

  function parse(code) {
    if (!code?.startsWith("KF|")) return null;

    const parts = code.replace(/\s+/g, "").split("|");

    const cfg = {
      duration: 1200,
      loop: true,
      tracks: {},
      ease: Ease.sine
    };

    for (const p of parts) {
      if (!p) continue;

      if (p.startsWith("T")) {
        cfg.duration = Number(p.slice(1)) || 1200;
        continue;
      }

      if (p.startsWith("E:")) {
        cfg.ease = Ease[p.split(":")[1]] || Ease.sine;
        continue;
      }

      const [prop, data] = p.split(":");
      if (!prop || !data) continue;

      const key = prop.trim();

      cfg.tracks[key] = data.split(",").map(k => {
        const [t, v] = k.split("=");
        return {
          t: Number(t),
          v: Number(v)
        };
      }).filter(k => !isNaN(k.t) && !isNaN(k.v))
        .sort((a, b) => a.t - b.t);
    }

    return cfg;
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function sample(track, t) {
    if (!track?.length) return 0;

    for (let i = 0; i < track.length - 1; i++) {
      const a = track[i];
      const b = track[i + 1];

      if (t >= a.t && t <= b.t) {
        const lt = (t - a.t) / ((b.t - a.t) || 1);
        return lerp(a.v, b.v, Math.max(0, Math.min(1, lt)));
      }
    }

    return track.at(-1).v;
  }

  function apply(el, s) {
    const x = s.x || 0;
    const y = s.y || 0;
    const r = s.r || 0;

    const sx = s.sx ?? s.s ?? 1;
    const sy = s.sy ?? s.s ?? 1;

    el.style.transform =
      `translate(${x}px,${y}px) rotate(${r}deg) scale(${sx},${sy})`;

    el.style.opacity = s.o ?? 1;
  }

  function run(el, cfg) {
    const start = performance.now();

    const state = { x: 0, y: 0, r: 0, sx: 1, sy: 1, o: 1 };

    function frame(now) {
      let t = (now - start) / cfg.duration;
      t = cfg.loop ? (t % 1) : Math.min(1, Math.max(0, t));

      const e = cfg.ease(t);

      state.x = sample(cfg.tracks.X, e);
      state.y = sample(cfg.tracks.Y, e);
      state.r = sample(cfg.tracks.R, e);

      state.sx = sample(cfg.tracks.SX, e);
      state.sy = sample(cfg.tracks.SY, e);

      state.o = sample(cfg.tracks.O, e);

      apply(el, state);
      RAF(frame);
    }

    RAF(frame);
  }

  function init() {
    document.querySelectorAll("[data-anim^='KF|']").forEach(el => {
      const cfg = parse(el.getAttribute("data-anim"));
      if (cfg) run(el, cfg);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
