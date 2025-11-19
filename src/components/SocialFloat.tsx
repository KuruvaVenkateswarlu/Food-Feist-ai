import React from "react";
import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const SocialFloat: React.FC = () => {
  return (
    <div style={{ position: "fixed", left: 12, top: "50%", transform: "translateY(-50%)", zIndex: 60 }}>
      <ul style={{ display: "flex", flexDirection: "column", gap: 8, listStyle: "none", margin: 0, padding: 0 }}>
        <li>
          <a href="mailto:venkatkuruva4@gmail.com" title="Email" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "#111827", color: "white", borderRadius: 9999, textDecoration: "none" }}>
            <Mail size={18} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/venkat_kuruva?igsh=MXIzZm9xbXBsaWRpMg==" target="_blank" rel="noreferrer" title="Instagram" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "#111827", color: "white", borderRadius: 9999, textDecoration: "none" }}>
            <Instagram size={18} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/share/1G8LyfMx7M/" target="_blank" rel="noreferrer" title="Facebook" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "#111827", color: "white", borderRadius: 9999, textDecoration: "none" }}>
            <Facebook size={18} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kuruva08" target="_blank" rel="noreferrer" title="LinkedIn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "#111827", color: "white", borderRadius: 9999, textDecoration: "none" }}>
            <Linkedin size={18} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialFloat;
