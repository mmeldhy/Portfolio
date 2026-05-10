"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
const MESSAGES = [
  "> Konami code detected...",
  "> Loading portfolio secrets...",
  "> Reading encrypted profile...",
  "> Mounting easter_egg module...",
  "> DONE ✓",
  "> You found the hidden feature! 🎉",
  "> You clearly know your stuff — let's collaborate!",
];

function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const FS = 14, cols = Math.floor(canvas.width / FS);
    const drops = Array<number>(cols).fill(1);
    const chars = "アイウGITHUBNETWORK01PORT".split("");
    let raf: number;
    const draw = () => {
      ctx.fillStyle = "rgba(3,5,10,0.06)";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "#00d9ff12"; ctx.font = `${FS}px monospace`;
      for (let i=0;i<drops.length;i++){
        ctx.fillText(chars[Math.floor(Math.random()*chars.length)],i*FS,drops[i]*FS);
        if(drops[i]*FS>canvas.height&&Math.random()>0.975) drops[i]=0;
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} style={{position:"absolute",inset:0,opacity:0.35,pointerEvents:"none"}}/>;
}

export default function EasterEgg() {
  const [seq, setSeq] = useState<string[]>([]);
  const [active, setActive] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const trigger = useCallback(() => {
    setActive(true); setLines([]); setDone(false);
    MESSAGES.forEach((msg, i) => {
      setTimeout(() => {
        setLines(p => [...p, msg]);
        if (i === MESSAGES.length - 1) setTimeout(() => setDone(true), 500);
      }, i * 440);
    });
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      setSeq(prev => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join(",") === KONAMI.join(",")) { trigger(); return []; }
        return next;
      });
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [trigger]);

  if (!active) return null;

  return (
    <div onClick={() => { if(done) setActive(false); }}
      style={{position:"fixed",inset:0,zIndex:9500,display:"flex",alignItems:"center",justifyContent:"center",
        background:"rgba(3,5,10,0.96)",backdropFilter:"blur(12px)"}}>
      <MatrixRain/>
      <div style={{position:"relative",width:"min(540px,90vw)",background:"#0a0f1a",border:"1px solid #00d9ff40",
        borderRadius:14,overflow:"hidden",boxShadow:"0 0 60px #00d9ff12,0 32px 80px #00000080",zIndex:1}}>
        <div style={{display:"flex",alignItems:"center",gap:6,padding:"12px 16px",background:"#0d1422",borderBottom:"1px solid #162033"}}>
          <div style={{width:10,height:10,borderRadius:"50%",background:"#ff5f57"}}/>
          <div style={{width:10,height:10,borderRadius:"50%",background:"#febc2e"}}/>
          <div style={{width:10,height:10,borderRadius:"50%",background:"#28c840"}}/>
          <span style={{marginLeft:"auto",fontFamily:"var(--font-mono)",fontSize:11,color:"#567088"}}>easter_egg.sh — 🤫 SECRET</span>
        </div>
        <div style={{padding:"20px 24px",minHeight:196}}>
          {lines.map((line,i) => (
            <div key={i} style={{fontFamily:"var(--font-mono)",fontSize:13,lineHeight:2,
              color:line.includes("✓")||line.includes("🎉")||line.includes("!")?
                "#00ff88":line.includes("—")?"#00d9ff":"#567088"}}>{line}</div>
          ))}
          {!done && <span style={{fontFamily:"var(--font-mono)",fontSize:13,color:"#00d9ff",animation:"blink 1s step-end infinite"}}>▋</span>}
        </div>
        {done && (
          <div style={{padding:"14px 24px",borderTop:"1px solid #162033",display:"flex",gap:10,justifyContent:"flex-end"}}>
            <a href="#contact" onClick={()=>setActive(false)}
              style={{padding:"9px 22px",background:"linear-gradient(135deg,#00d9ff,#00b8d9)",color:"#05070b",
                fontFamily:"var(--font-display)",fontWeight:700,fontSize:13,borderRadius:7,textDecoration:"none"}}>
              Contact Me 🚀
            </a>
            <button onClick={()=>setActive(false)}
              style={{padding:"9px 22px",background:"transparent",color:"#567088",fontFamily:"var(--font-mono)",
                fontSize:12,border:"1px solid #162033",borderRadius:7,cursor:"pointer"}}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
