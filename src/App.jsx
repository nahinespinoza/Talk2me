import React, { useState } from "react";

/* ===================== Tokens ===================== */
const COLORS = {
  ink: "#1B3A5C",
  inkLight: "#3D5A78",
  coral: "#FF6B5B",
  coralDark: "#E85444",
  mint: "#4A9B8E",
  cream: "#FAF6F0",
  paper: "#FFFFFF",
  line: "#E7E0D4",
  text: "#2A2A2A",
  textSoft: "#7A7A7A",
  warn: "#E8A23D",
  danger: "#D14848",
};

/* ===================== Icons (inline SVG) ===================== */
const Icon = ({ children, size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);
const IconCalendar = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 10h18" />
    <path d="M8 3v4M16 3v4" />
  </Icon>
);
const IconChat = (p) => (
  <Icon {...p}>
    <path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1" />
    <path d="M21 4l-5 5" />
    <circle cx="9" cy="11.5" r="1" />
    <circle cx="13" cy="11.5" r="1" />
    <circle cx="5" cy="11.5" r="1" />
  </Icon>
);
const IconUser = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
  </Icon>
);
const IconUsers = (p) => (
  <Icon {...p}>
    <circle cx="9" cy="8" r="3.4" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <circle cx="17.5" cy="9" r="2.6" />
    <path d="M21.5 19.6c0-2.6-2-4.6-4.7-5" />
  </Icon>
);
const IconBolt = (p) => (
  <Icon {...p}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
  </Icon>
);
const IconEdit = (p) => (
  <Icon {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
  </Icon>
);
const IconChart = (p) => (
  <Icon {...p}>
    <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
  </Icon>
);
const IconSettings = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 13a7.97 7.97 0 0 0 0-2l2-1.6-2-3.4-2.4 1a8 8 0 0 0-1.7-1L15 3h-6l-.3 2.6a8 8 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.97 7.97 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 1.7 1L9 21h6l.3-2.4a8 8 0 0 0 1.7-1l2.4 1 2-3.4z" />
  </Icon>
);
const IconUpload = (p) => (
  <Icon {...p}>
    <path d="M12 16V4M7 9l5-5 5 5" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </Icon>
);
const IconMic = (p) => (
  <Icon {...p}>
    <rect x="9" y="2" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </Icon>
);
const IconMicOff = (p) => (
  <Icon {...p}>
    <line x1="2" y1="2" x2="22" y2="22" />
    <path d="M9 9v2a3 3 0 0 0 5 2.2M15 6.7V5a3 3 0 0 0-5.7-1.3" />
    <path d="M5 11a7 7 0 0 0 10.6 6" />
    <path d="M12 18v3" />
  </Icon>
);
const IconVideo = (p) => (
  <Icon {...p}>
    <rect x="2" y="6" width="14" height="12" rx="2.5" />
    <path d="M16 10.5l6-3.5v10l-6-3.5" />
  </Icon>
);
const IconCamOff = (p) => (
  <Icon {...p}>
    <line x1="2" y1="2" x2="22" y2="22" />
    <rect x="2" y="6" width="14" height="12" rx="2.5" />
    <path d="M16 10.5l6-3.5v10l-6-3.5" />
  </Icon>
);
const IconFlag = (p) => (
  <Icon {...p}>
    <path d="M5 21V4" />
    <path d="M5 4h13l-3 4.5L18 13H5" />
  </Icon>
);
const IconPhoneOff = (p) => (
  <Icon {...p}>
    <path d="M11 5a16 16 0 0 1 6.5 1.4 1.4 1.4 0 0 1 .8 1.6l-.6 2.6a1.4 1.4 0 0 1-1 1l-2 .5a1.4 1.4 0 0 0-.9 1.9 9 9 0 0 0 .5 1" />
    <path d="M2 2l20 20" />
    <path d="M5.6 5.6 4.4 8.2a1.4 1.4 0 0 0 .8 1.6c.8.3 1.6.7 2.4 1.2" />
  </Icon>
);
const IconAlert = (p) => (
  <Icon {...p}>
    <path d="M12 9v4" />
    <path d="M10.3 3.9 2.6 17a1.8 1.8 0 0 0 1.6 2.7h15.6a1.8 1.8 0 0 0 1.6-2.7L13.7 3.9a1.8 1.8 0 0 0-3.4 0z" />
    <circle cx="12" cy="16.5" r="0.4" fill="currentColor" />
  </Icon>
);
const IconArrowLeft = (p) => (
  <Icon {...p}>
    <path d="M19 12H5" />
    <path d="M11 18l-6-6 6-6" />
  </Icon>
);
const IconHome = (p) => (
  <Icon {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v9.5a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
  </Icon>
);
const IconMail = (p) => (
  <Icon {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M3 7l9 6 9-6" />
  </Icon>
);
const IconLock = (p) => (
  <Icon {...p}>
    <rect x="4" y="11" width="16" height="9" rx="2.5" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Icon>
);
const IconBook = (p) => (
  <Icon {...p}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </Icon>
);
const IconCheck = (p) => (
  <Icon {...p}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);

const IconSparkle = (p) => (
  <Icon {...p}>
    <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
  </Icon>
);


const LogoMark = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path
      d="M14 18a14 14 0 0 1 14-14h8a14 14 0 0 1 0 28h-2l-6 8v-8h0a14 14 0 0 1-14-14z"
      fill={COLORS.ink}
    />
    <path
      d="M22 38a12 12 0 0 0 12 12h2l5 6v-6h2a12 12 0 0 0 12-12v-2"
      stroke={COLORS.coral}
      strokeWidth="3.4"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="22" cy="18" r="2.4" fill={COLORS.cream} />
    <circle cx="29" cy="18" r="2.4" fill={COLORS.cream} />
    <circle cx="36" cy="18" r="2.4" fill={COLORS.cream} />
  </svg>
);

/* ===================== Datos simulados ===================== */
// Días del mes (1-30) en los que algún tutor abrió disponibilidad.
const AVAILABLE_DAYS = [3, 8, 15, 18, 22, 27];

// Clases disponibles para agendar, agrupadas por día.
const AVAILABLE_CLASSES_BY_DAY = {
  3: [
    {
      id: "a1",
      tutor: "Personal 1",
      hora: "10:00 am",
      tema: "Conversacion Tema Libre",
      nivel: "Intermedio B1",
    },
    {
      id: "a2",
      tutor: "Personal 3",
      hora: "16:00 pm",
      tema: "Pronunciación",
      nivel: "Principiante A2",
    },
  ],
  8: [
    {
      id: "a3",
      tutor: "Personal 2",
      hora: "09:00 am",
      tema: "Conversación libre",
      nivel: "Avanzado C1",
    },
  ],
  15: [
    {
      id: "a4",
      tutor: "Personal 1",
      hora: "15:00 pm",
      tema: "Conversacion Tema Libre",
      nivel: "Intermedio B1",
    },
    {
      id: "a5",
      tutor: "Personal 2",
      hora: "18:30 pm",
      tema: "Vocabulario para Eventos Sociales",
      nivel: "Intermedio B2",
    },
  ],
  18: [
    {
      id: "a6",
      tutor: "Personal 3",
      hora: "11:00 am",
      tema: "Vocabulario de viajes",
      nivel: "Principiante A2",
    },
  ],
  22: [
    {
      id: "a7",
      tutor: "Personal 1",
      hora: "14:00 pm",
      tema: "Conversacion Tema Libre",
      nivel: "Intermedio B1",
    },
  ],
  27: [
    {
      id: "a8",
      tutor: "Personal 2",
      hora: "17:00 pm",
      tema: "Listening avanzado",
      nivel: "Avanzado C2",
    },
  ],
};

// "Mis clases": historial + próximas.
const MY_CLASSES_INIT = [
  {
    id: "m1",
    estado: "proxima",
    tutor: "Personal 1",
    tema: "Conversacion Tema Libre",
    fecha: "21/06/26",
    hora: "15:00 pm",
    puedeUnirse: true,
  },
  {
    id: "m2",
    estado: "proxima",
    tutor: "Personal 2",
    tema: "Vocabulario para Eventos Sociales",
    fecha: "22/06/26",
    hora: "18:30 pm",
    puedeUnirse: false,
  },
  {
    id: "m3",
    estado: "proxima",
    tutor: "Personal 3",
    tema: "Vocabulario de viajes",
    fecha: "25/06/26",
    hora: "11:00 am",
    puedeUnirse: false,
  },
  {
    id: "m4",
    estado: "pasada",
    tutor: "Personal 1",
    tema: "Conversacion Tema Libre",
    fecha: "14/06/26",
    hora: "15:00 pm",
    puedeUnirse: false,
  },
  {
    id: "m5",
    estado: "pasada",
    tutor: "Personal 2",
    tema: "Conversación libre",
    fecha: "07/06/26",
    hora: "09:00 am",
    puedeUnirse: false,
  },
];

/* ===================== Style objects ===================== */
const s = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "32px 16px",
    background: `radial-gradient(circle at 15% 10%, rgba(255,107,91,0.10), transparent 40%),
                 radial-gradient(circle at 85% 90%, rgba(74,155,142,0.10), transparent 40%),
                 ${COLORS.cream}`,
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    color: COLORS.text,
  },
  stage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 18,
    maxWidth: 420,
    width: "100%",
  },
  headerWrap: { textAlign: "center" },
  headerMark: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: COLORS.ink,
    marginBottom: 6,
  },
  headerP: { margin: "4px 0 0", color: COLORS.textSoft, fontSize: 13 },
  phone: {
    width: 340,
    maxWidth: "92vw",
    height: 680,
    background: COLORS.paper,
    borderRadius: 42,
    boxShadow: `0 12px 28px -8px rgba(27,58,92,0.18), 0 0 0 10px #15263A`,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  notch: {
    height: 30,
    background: "#15263A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  pill: { width: 80, height: 7, background: "#0A1420", borderRadius: 10 },
  screen: {
    flex: 1,
    overflowY: "auto",
    background: COLORS.cream,
    position: "relative",
  },
  homeBarWrap: {
    flexShrink: 0,
    background: COLORS.paper,
    padding: "8px 0 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: `1px solid ${COLORS.line}`,
  },
  homeBar: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    border: `2px solid ${COLORS.ink}`,
    background: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.ink,
  },
  crumbs: {
    fontSize: 11,
    color: COLORS.textSoft,
    textAlign: "center",
    minHeight: 14,
  },
  pad: { padding: "22px 20px 24px" },
  topTitle: { textAlign: "center", marginBottom: 18 },
  eyebrow: {
    fontSize: 11,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: COLORS.coralDark,
    fontWeight: 700,
    marginBottom: 2,
  },
  topTitleH2: {
    fontSize: 19,
    color: COLORS.ink,
    margin: "2px 0 0",
    fontFamily: "'Fredoka', sans-serif",
  },
  field: { marginBottom: 16 },
  fieldLabel: {
    display: "block",
    fontSize: 12.5,
    fontWeight: 700,
    color: COLORS.ink,
    marginBottom: 6,
  },
  input: {
    width: "100%",
    padding: "11px 13px",
    borderRadius: 12,
    border: `1.6px solid ${COLORS.line}`,
    background: COLORS.paper,
    fontSize: 14,
    fontFamily: "inherit",
    color: COLORS.text,
    outline: "none",
    boxSizing: "border-box",
  },
  fieldHint: {
    fontSize: 11,
    color: COLORS.textSoft,
    textAlign: "right",
    marginTop: 5,
    cursor: "pointer",
  },
  uploadBox: {
    border: `1.6px dashed ${COLORS.inkLight}`,
    borderRadius: 12,
    padding: 14,
    textAlign: "center",
    background: "rgba(27,58,92,0.04)",
    fontSize: 12.5,
    color: COLORS.inkLight,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  btn: {
    width: "100%",
    padding: 13,
    borderRadius: 14,
    border: "none",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: 14.5,
    cursor: "pointer",
  },
  btnPrimary: {
    background: COLORS.coral,
    color: "white",
    boxShadow: "0 8px 18px -6px rgba(255,107,91,0.55)",
  },
  btnGhost: {
    background: "transparent",
    color: COLORS.ink,
    border: `1.6px solid ${COLORS.line}`,
  },
  btnDanger: {
    background: "transparent",
    color: COLORS.danger,
    border: `1.6px solid ${COLORS.danger}`,
  },
  btnRow: { display: "flex", gap: 10 },
  linkRow: {
    textAlign: "center",
    fontSize: 12.5,
    color: COLORS.textSoft,
    marginTop: 14,
  },
  link: {
    color: COLORS.coralDark,
    fontWeight: 700,
    textDecoration: "none",
    cursor: "pointer",
  },
  homeGreeting: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  avatarCircle: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${COLORS.coral}, ${COLORS.ink})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 700,
    fontFamily: "'Fredoka'",
    flexShrink: 0,
  },
  who: { fontSize: 11, color: COLORS.textSoft },
  name: {
    fontSize: 15,
    fontWeight: 700,
    color: COLORS.ink,
    fontFamily: "'Fredoka'",
  },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
  tile: {
    background: COLORS.paper,
    borderRadius: 16,
    padding: "18px 14px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 6px 16px -8px rgba(27,58,92,0.12)",
    border: `1px solid ${COLORS.line}`,
    cursor: "pointer",
  },
  tileIc: {
    width: 46,
    height: 46,
    borderRadius: 13,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tileSpan: {
    fontSize: 12.5,
    fontWeight: 700,
    color: COLORS.ink,
    textAlign: "center",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: COLORS.inkLight,
    margin: "22px 0 10px",
  },
  card: {
    background: COLORS.paper,
    borderRadius: 16,
    padding: 16,
    border: `1px solid ${COLORS.line}`,
    boxShadow: "0 4px 14px -10px rgba(27,58,92,0.18)",
    marginBottom: 12,
  },
  calHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  calGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 6,
    marginBottom: 6,
  },
  calDayLabel: {
    textAlign: "center",
    fontSize: 11,
    fontWeight: 700,
    color: COLORS.textSoft,
    paddingBottom: 4,
  },
  calCell: {
    aspectRatio: "1",
    borderRadius: 9,
    background: COLORS.paper,
    border: `1px solid ${COLORS.line}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    color: COLORS.text,
    cursor: "pointer",
  },
  calCellSelected: {
    background: COLORS.coral,
    color: "white",
    borderColor: COLORS.coral,
    fontWeight: 700,
  },
  calCellHasClass: {
    background: "rgba(74,155,142,0.18)",
    borderColor: COLORS.mint,
    fontWeight: 700,
    color: COLORS.ink,
  },
  classSummary: {
    background: "rgba(255,107,91,0.08)",
    border: `1.4px dashed ${COLORS.coral}`,
    borderRadius: 14,
    padding: 14,
    margin: "16px 0",
    textAlign: "center",
  },
  classHero: {
    background: COLORS.ink,
    color: "white",
    borderRadius: 16,
    padding: 20,
    textAlign: "center",
    marginBottom: 16,
  },
  badgeLive: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: COLORS.coral,
    color: "white",
    fontSize: 11,
    fontWeight: 700,
    padding: "4px 10px",
    borderRadius: 20,
    marginTop: 10,
  },
  peopleRow: {
    display: "flex",
    justifyContent: "center",
    gap: 28,
    margin: "18px 0",
  },
  person: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  personCircle: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: COLORS.paper,
    border: `2px solid ${COLORS.line}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  callScreen: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: "#0F2138",
    color: "white",
  },
  callTopbar: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 16px 8px",
    fontSize: 12.5,
    fontWeight: 700,
  },
  callMain: {
    flex: 1,
    position: "relative",
    margin: "0 14px",
    borderRadius: 18,
    overflow: "hidden",
    background: "linear-gradient(160deg, #18365A, #0F2138)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pip: {
    position: "absolute",
    bottom: 14,
    right: 14,
    width: 84,
    height: 114,
    borderRadius: 12,
    background: COLORS.ink,
    border: "2px solid rgba(255,255,255,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  callNameTag: {
    position: "absolute",
    top: 12,
    left: 12,
    background: "rgba(0,0,0,0.35)",
    padding: "4px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 700,
  },
  callToolbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "18px 10px 22px",
  },
  callBtn: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.12)",
    color: "white",
  },
  callBtnEnd: { background: COLORS.danger },
  callBtnReport: { background: COLORS.warn, color: "#3a2a00" },
  reportIcon: {
    width: 74,
    height: 74,
    borderRadius: "50%",
    background: "rgba(232,162,61,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 14px",
  },
  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pillTag: {
    fontSize: 10.5,
    fontWeight: 700,
    padding: "3px 9px",
    borderRadius: 20,
    background: "rgba(74,155,142,0.15)",
    color: COLORS.mint,
    display: "inline-block",
  },
  emptyTip: {
    textAlign: "center",
    color: COLORS.textSoft,
    fontSize: 12.5,
    padding: "30px 10px",
  },
  toast: {
    position: "fixed",
    bottom: 32,
    left: "50%",
    transform: "translateX(-50%)",
    background: COLORS.ink,
    color: "white",
    padding: "12px 20px",
    borderRadius: 14,
    fontSize: 13,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: 8,
    boxShadow: "0 8px 24px -6px rgba(27,58,92,0.40)",
    zIndex: 999,
    whiteSpace: "nowrap",
  },
  actCard: {
    background: COLORS.paper,
    borderRadius: 16,
    padding: 16,
    border: `1px solid ${COLORS.line}`,
    boxShadow: "0 4px 14px -10px rgba(27,58,92,0.18)",
    marginBottom: 12,
    cursor: "pointer",
  },
};

/* ===================== Font + Global CSS ===================== */
const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
    @keyframes t2m-pulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }
    @keyframes t2m-toast-in { from{opacity:0;transform:translateX(-50%) translateY(12px);} to{opacity:1;transform:translateX(-50%) translateY(0);} }
    .t2m-pulse  { animation: t2m-pulse 1.3s infinite; }
    .t2m-toast  { animation: t2m-toast-in .25s ease; }
    .t2m-hide-scroll::-webkit-scrollbar { display:none; }
    @keyframes t2m-pulse-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(255,107,91,0.7);
    transform: translateY(-50%) scale(1);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255,107,91,0);
    transform: translateY(-50%) scale(1.3);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255,107,91,0);
    transform: translateY(-50%) scale(1);
  }
}
  @keyframes t2m-glow-pulse {
  0%, 100% {
    box-shadow: 0 0 8px 2px rgba(255,107,91,0.2), 0 0 20px 6px rgba(255,107,91,0.1);
  }
  50% {
    box-shadow: 0 0 16px 6px rgba(255,107,91,0.5), 0 0 40px 12px rgba(255,107,91,0.2);
  }
}
    .t2m-hide-scroll { -ms-overflow-style:none; scrollbar-width:none; }
    .t2m-tile:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -8px rgba(27,58,92,0.22); }
    .t2m-home:hover { transform: scale(1.08); background: rgba(27,58,92,0.06); }
    .t2m-btn:active { transform: scale(0.97); }
    h1,h2,h3 { font-family:'Fredoka', sans-serif; }
  `}</style>
);


/* ===================== Shared bits ===================== */
const HomeButton = ({ onClick }) => (
  <button
    className="t2m-home"
    style={s.homeBar}
    onClick={onClick}
    title="Volver al inicio"
  >
    <IconHome size={16} />
  </button>
);

const BackRow = ({ onBack, title }) => (
  <div
    style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}
  >
    <button
      onClick={onBack}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: COLORS.ink,
        padding: 4,
      }}
    >
      <IconArrowLeft size={20} />
    </button>
    {title && (
      <h2 style={{ fontSize: 16, color: COLORS.ink, margin: 0 }}>{title}</h2>
    )}
  </div>
);

const TopTitle = ({ eyebrow, title }) => (
  <div style={s.topTitle}>
    {eyebrow && <div style={s.eyebrow}>{eyebrow}</div>}
    <h2 style={s.topTitleH2}>{title}</h2>
  </div>
);

/* ===================== Screens ===================== */
// 1. Splash / selección de perfil
function ScreenSplash({ go }) {
  const items = [
    {
      key: "login",
      label: "Iniciar sesión",
      icon: <IconUser />,
      bg: "rgba(255,107,91,0.14)",
      color: COLORS.coralDark,
    },
    {
      key: "reg-estud",
      label: "Registrarse",
      icon: <IconEdit />,
      bg: "rgba(74,155,142,0.14)",
      color: COLORS.mint,
    },
  ];
  return (
    <div style={s.pad}>
      <div style={{ textAlign: "center", marginTop: 18, marginBottom: 26 }}>
        <LogoMark size={68} />
        <h1 style={{ color: COLORS.ink, fontSize: 24, margin: "10px 0 2px" }}>
          Talk2Me
        </h1>
        <p style={{ color: COLORS.textSoft, fontSize: 12.5, margin: 0 }}>
          Practica el idioma, conectando contigo
        </p>
      </div>
      <div style={s.grid2}>
        {items.map((it) => (
          <div
            className="t2m-tile"
            style={s.tile}
            key={it.key}
            onClick={() => go(it.key)}
          >
            <div style={{ ...s.tileIc, background: it.bg, color: it.color }}>
              {it.icon}
            </div>
            <span style={s.tileSpan}>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. Login
function ScreenLogin({ go }) {
  return (
    <div style={s.pad}>
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <LogoMark size={56} />
      </div>
      <TopTitle
        eyebrow="Bienvenido de nuevo"
        title="Ingrese su usuario y contraseña"
      />
      <div style={s.field}>
        <label style={s.fieldLabel}>Usuario</label>
        <input style={s.input} placeholder="nombre@correo.com" />
      </div>
      <div style={s.field}>
        <label style={s.fieldLabel}>Contraseña</label>
        <input style={s.input} type="password" placeholder="••••••••" />
        <div style={s.fieldHint} onClick={() => go("recuperar")}>
          ¿Olvidó su contraseña?
        </div>
      </div>
      <button
        className="t2m-btn"
        style={{ ...s.btn, ...s.btnPrimary }}
        onClick={() => go("inicio")}
      >
        Ingresar
      </button>
      <div style={s.linkRow}>
        ¿No tienes cuenta?{" "}
        <a style={s.link} onClick={() => go("reg-estud")}>
          Regístrate
        </a>
      </div>
    </div>
  );
}

// 3. Recuperar contraseña
function ScreenRecuperar({ go }) {
  return (
    <div style={s.pad}>
      <BackRow onBack={() => go("login")} title="Recuperar acceso" />
      <p
        style={{
          fontSize: 12.5,
          color: COLORS.textSoft,
          marginTop: -4,
          marginBottom: 18,
        }}
      >
        Ingresa tu correo institucional y te enviaremos instrucciones para
        restablecer tu contraseña.
      </p>
      <div style={s.field}>
        <label style={s.fieldLabel}>Correo institucional</label>
        <input style={s.input} placeholder="usuario@universidad.edu" />
      </div>
      <button
        className="t2m-btn"
        style={{ ...s.btn, ...s.btnPrimary }}
        onClick={() => go("login")}
      >
        Enviar instrucciones
      </button>
    </div>
  );
}

// 4. Registro universitario
function ScreenRegUniv({ go }) {
  return (
    <div style={s.pad}>
      <BackRow onBack={() => go("splash")} />
      <TopTitle
        eyebrow="Terminos y Condiciones"
        title="Registro de universidad"
      />
      <div style={s.field}>
        <label style={s.fieldLabel}>Nombres y apellidos</label>
        <input style={s.input} placeholder="Responsable de convenio" />
      </div>
      <div style={s.field}>
        <label style={s.fieldLabel}>Correo institucional</label>
        <input style={s.input} placeholder="contacto@universidad.edu" />
      </div>
      <div style={s.field}>
        <label style={s.fieldLabel}>
          Adjunte certificado RUC / institucional
        </label>
        <div style={s.uploadBox}>
          <IconUpload size={16} /> Subir archivo
        </div>
      </div>
      <button
        className="t2m-btn"
        style={{ ...s.btn, ...s.btnPrimary }}
        onClick={() => go("login")}
      >
        Crear Terminos y Condiciones
      </button>
    </div>
  );
}
// 5. Registro estudiante
function ScreenRegEstud({ go }) {
  return (
    <div style={s.pad}>
      <BackRow onBack={() => go("splash")} />
      <TopTitle
        eyebrow="Únete como estudiante"
        title="Registro de estudiante"
      />
      <div style={s.field}>
        <label style={s.fieldLabel}>Nombres y apellidos</label>
        <input style={s.input} placeholder="Tu nombre completo" />
      </div>
      <div style={s.field}>
        <label style={s.fieldLabel}>Institución educativa</label>
        <input
          style={s.input}
          placeholder="Selecciona o escribe tu universidad"
        />
      </div>
      <div style={s.field}>
        <label style={s.fieldLabel}>Nivel de aprendizaje</label>
        <select style={s.input}>
          <option>Principiante (A1–A2)</option>
          <option>Intermedio (B1–B2)</option>
          <option>Avanzado (C1–C2)</option>
        </select>
      </div>
      <button
        className="t2m-btn"
        style={{ ...s.btn, ...s.btnPrimary }}
        onClick={() => go("login")}
      >
        Crear mi cuenta
      </button>
    </div>
  );
}

// 6. Soporte
function ScreenSoporte({ go }) {
  return (
    <div style={s.pad}>
      <BackRow onBack={() => go("splash")} title="Contacto y soporte" />
      <div style={s.card}>
        <p style={{ fontSize: 13, margin: 0, color: COLORS.text }}>
          ¿Tienes dudas sobre tu cuenta o una clase? Escríbenos y te respondemos
          en menos de 24 horas.
        </p>
      </div>
      <div style={s.field}>
        <label style={s.fieldLabel}>Correo de contacto</label>
        <input style={s.input} placeholder="tu@correo.com" />
      </div>
      <div style={s.field}>
        <label style={s.fieldLabel}>Mensaje</label>
        <input style={s.input} placeholder="Cuéntanos qué necesitas" />
      </div>
      <button
        className="t2m-btn"
        style={{ ...s.btn, ...s.btnPrimary }}
        onClick={() => go("splash")}
      >
        Enviar mensaje
      </button>
    </div>
  );
}
//
// 7. Inicio (home)
function ScreenInicio({ go }) {
  const tiles = [
    {
      key: "calendario",
      label: "Agendar clase",
      icon: <IconCalendar />,
      bg: "rgba(255,107,91,0.14)",
      color: COLORS.coralDark,
    },
    {
      key: "actividades",
      label: "Actividades",
      icon: <IconBook />,
      bg: "rgba(74,155,142,0.16)",
      color: COLORS.mint,
    },
    {
      key: "mis-clases",
      label: "Mis clases",
      icon: <IconUsers />,
      bg: "rgba(27,58,92,0.10)",
      color: COLORS.ink,
    },
    {
      key: "progreso",
      label: "Progreso",
      icon: <IconChart />,
      bg: "rgba(74,155,142,0.16)",
      color: COLORS.mint,
    },
    {
      key: "ajustes",
      label: "Ajustes",
      icon: <IconSettings />,
      bg: "rgba(232,162,61,0.16)",
      color: COLORS.warn,
    },
  ];

  // El tile 5 (Ajustes) ocupa ancho completo en la grid de 2 columnas
  const grid5Style = (i) =>
    i === 4
      ? {
          gridColumn: "1 / -1",
          flexDirection: "row",
          gap: 14,
          padding: "14px 18px",
          justifyContent: "flex-start",
        }
      : {};
  const ic5Style = (i) => (i === 4 ? { width: 40, height: 40 } : {});

  return (
    <div style={s.pad}>
      <div style={s.homeGreeting}>
        <div style={s.avatarCircle}>A</div>
        <div>
          <div style={s.who}>Hola de nuevo,</div>
          <div style={s.name}>Ana Martínez</div>
        </div>
      </div>
      <div
        style={{ ...s.classSummary, cursor: "pointer" }}
        onClick={() => go("mis-clases")}
      >
        <div style={{ fontWeight: 700, color: COLORS.ink, fontSize: 14 }}>
          Tu próxima clase: Conversacion Tema Libre
        </div>
        <div style={{ fontSize: 12.5, color: COLORS.textSoft, marginTop: 3 }}>
          Hoy · 15:00 pm con tu tutor personal
        </div>
      </div>
      <div style={s.grid2}>
        {tiles.map((t, i) => (
          <div
            key={t.key}
            className="t2m-tile"
            style={{ ...s.tile, ...grid5Style(i) }}
            onClick={() => go(t.key)}
          >
            <div
              style={{
                ...s.tileIc,
                ...ic5Style(i),
                background: t.bg,
                color: t.color,
              }}
            >
              {t.icon}
            </div>
            <span style={s.tileSpan}>{t.label}</span>
          </div>
        ))}
      </div>
      
      {/* === Tu posición en la clase === */}
      <div
  style={{
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: COLORS.inkLight,
    margin: "22px 0 10px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}
>
  <span
    style={{
      padding: "6px 16px",
      borderRadius: 20,
      animation: "t2m-glow-pulse 2s infinite",
    }}
  >
    Tu posición
  </span>
</div>
      <div
        style={{
          ...s.card,
          background: `linear-gradient(135deg, ${COLORS.ink} 0%, ${COLORS.inkLight} 100%)`,
          color: "white",
          border: "none",
          position: "relative",
          overflow: "hidden",
          maxHeight: 280,
        }}
      >
        {/* Contenedor scrollable con contenido extra */}
        <div
          style={{
            maxHeight: 280,
            overflowY: "auto",
            paddingRight: 4,
          }}
          className="t2m-hide-scroll"
        >
          <div style={{ textAlign: "center", marginBottom: 14 }}>
            <div
              style={{
                fontSize: 11,
                opacity: 0.75,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Ranking de tu clase
            </div>
            <div
              style={{
                fontSize: 42,
                fontWeight: 800,
                fontFamily: "'Fredoka', sans-serif",
                lineHeight: 1,
              }}
            >
              #3
            </div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>
              de 24 estudiantes
            </div>
          </div>

          {/* Top 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 14,
              marginBottom: 16,
            }}
          >
            {/* 2do lugar */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 700,
                  margin: "0 auto 6px",
                }}
              >
                C
              </div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>2°</div>
              <div style={{ fontSize: 11, fontWeight: 700 }}>Carlos</div>
              <div style={{ fontSize: 10, opacity: 0.6 }}>1,240 pts</div>
            </div>

            {/* 1er lugar */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(255,107,91,0.25)",
                  border: `2px solid ${COLORS.coral}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  fontWeight: 800,
                  margin: "0 auto 6px",
                  position: "relative",
                }}
              >
                M
                <span
                  style={{
                    position: "absolute",
                    top: -8,
                    fontSize: 16,
                  }}
                >
                  👑
                </span>
              </div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>1°</div>
              <div style={{ fontSize: 12, fontWeight: 700 }}>María</div>
              <div style={{ fontSize: 10, opacity: 0.6 }}>1,580 pts</div>
            </div>

            {/* 3er lugar - TÚ */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: COLORS.coral,
                  border: `2px solid white`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 700,
                  margin: "0 auto 6px",
                }}
              >
                A
              </div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>3°</div>
              <div style={{ fontSize: 11, fontWeight: 700 }}>Tú</div>
              <div style={{ fontSize: 10, opacity: 0.6 }}>1,185 pts</div>
            </div>
          </div>

          {/* Tu progreso hacia el siguiente puesto */}
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "12px 14px",
              marginBottom: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600 }}>
                🎯 A 55 pts del 2° lugar
              </span>
              <span style={{ fontSize: 11, opacity: 0.8 }}>1,185 / 1,240</span>
            </div>
            <div
              style={{
                height: 6,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "95%",
                  background: COLORS.coral,
                  borderRadius: 4,
                }}
              />
            </div>
          </div>

          {/* MÁS CONTENIDO que aparece al deslizar */}
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                opacity: 0.7,
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Top 4 - 6
            </div>
            {[
              { pos: 4, name: "Lucía", pts: "1,050", you: false },
              { pos: 5, name: "Pedro", pts: "980", you: false },
              { pos: 6, name: "Sofía", pts: "920", you: false },
            ].map((p) => (
              <div
                key={p.pos}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {p.pos}
                </div>
                <div style={{ flex: 1, fontSize: 12.5, fontWeight: 600 }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 11, opacity: 0.7 }}>{p.pts} pts</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                opacity: 0.7,
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Tu rendimiento
            </div>
            {[
              { label: "Speaking", val: 82, color: COLORS.coral },
              { label: "Listening", val: 75, color: COLORS.mint },
              { label: "Grammar", val: 68, color: COLORS.warn },
              { label: "Vocabulary", val: 90, color: COLORS.coral },
            ].map((skill) => (
              <div key={skill.label} style={{ marginBottom: 10 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11.5,
                    marginBottom: 4,
                  }}
                >
                  <span>{skill.label}</span>
                  <span style={{ opacity: 0.8 }}>{skill.val}%</span>
                </div>
                <div
                  style={{
                    height: 5,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${skill.val}%`,
                      background: skill.color,
                      borderRadius: 3,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FADE en la parte inferior para indicar más contenido */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 50,
            background: `linear-gradient(to bottom, transparent 0%, ${COLORS.inkLight} 70%, ${COLORS.ink} 100%)`,
            pointerEvents: "none",
            zIndex: 2,
            borderRadius: "0 0 16px 16px",
          }}
        />
        {/* Indicador de scroll */}
        <div
          style={{
            position: "absolute",
            bottom: 6,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <div
            style={{
              width: 32,
              height: 4,
              borderRadius: 2,
              background: "rgba(255,255,255,0.35)",
            }}
          />
          <div
            style={{
              fontSize: 8,
              color: "rgba(255,255,255,0.5)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            desliza
          </div>
        </div>
      </div>


      {/* === Estadísticas rápidas === */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 4 }}>
        <div style={{ ...s.card, textAlign: "center", padding: "14px 10px" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.mint, fontFamily: "'Fredoka', sans-serif" }}>
            12
          </div>
          <div style={{ fontSize: 11, color: COLORS.textSoft, marginTop: 2 }}>
            Clases completadas
          </div>
        </div>
        <div style={{ ...s.card, textAlign: "center", padding: "14px 10px" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.coral, fontFamily: "'Fredoka', sans-serif" }}>
            98%
          </div>
          <div style={{ fontSize: 11, color: COLORS.textSoft, marginTop: 2 }}>
            Asistencia
          </div>
        </div>
      </div>
    </div>
  );
}

// 8. Progreso


// 8. Progreso — Interfaz con IA Coach
function ScreenProgreso({ go }) {
  // Datos simulados del estudiante (en producción vendrían del backend)
  const studentData = {
    name: "Ana",
    level: "Intermedio B1",
    levelProgress: 72, // % hacia el siguiente nivel
    hoursPracticed: 14.5,
    goalHours: 20,
    classesCompleted: 9,
    totalClasses: 12,
    streakDays: 5,
    nextMilestone: "B2",
    weakAreas: ["Pronunciación de TH", "Past Perfect"],
    strongAreas: ["Vocabulario diario", "Listening básico"],
    recentLessons: [
      { name: "Past Simple", status: "completed", score: 85 },
      { name: "Present Perfect", status: "completed", score: 78 },
      { name: "Conditionals", status: "in_progress", progress: 60 },
      { name: "Phrasal Verbs", status: "locked" },
    ],
  };

  // Consejos generados por la "IA" según el progreso
  const aiInsights = [
    {
      type: "praise",
      icon: "🌟",
      text: `¡Vas muy bien, ${studentData.name}! Llevas ${studentData.streakDays} días seguidos practicando. ¡Sigue así!`,
    },
    {
      type: "tip",
      icon: "💡",
      text: `Tu nivel actual es ${studentData.level}. Estás al ${studentData.levelProgress}% de alcanzar ${studentData.nextMilestone}.`,
    },
    {
      type: "focus",
      icon: "🎯",
      text: `Te recomiendo enfocarte en: ${studentData.weakAreas.join(" y ")}. Practica 10 min extra esta semana.`,
    },
    {
      type: "achievement",
      icon: "🏆",
      text: `Has completado ${studentData.classesCompleted} de ${studentData.totalClasses} clases. ¡Casi llegas a tu meta!`,
    },
  ];

  const getLessonStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return {
          bg: "rgba(74,155,142,0.12)",
          border: COLORS.mint,
          icon: "✓",
          color: COLORS.mint,
        };
      case "in_progress":
        return {
          bg: "rgba(255,107,91,0.10)",
          border: COLORS.coral,
          icon: "▶",
          color: COLORS.coral,
        };
      case "locked":
        return {
          bg: "rgba(122,122,122,0.08)",
          border: COLORS.line,
          icon: "🔒",
          color: COLORS.textSoft,
        };
      default:
        return { bg: COLORS.paper, border: COLORS.line, icon: "•", color: COLORS.text };
    }
  };

  return (
    <div style={s.pad}>
      <BackRow onBack={() => go("inicio")} title="Tu progreso" />

      {/* === IA Coach Header === */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.ink} 0%, ${COLORS.inkLight} 100%)`,
          borderRadius: 20,
          padding: "20px 18px",
          marginBottom: 18,
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,107,91,0.15)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            <IconSparkle size={24} color="white" />
          </div>
          <div>
            <div style={{ fontSize: 11, opacity: 0.75, fontWeight: 600, letterSpacing: "0.05em" }}>
              TU COACH DE INGLÉS
            </div>
            <div style={{ fontSize: 15, fontWeight: 800, fontFamily: "'Fredoka', sans-serif" }}>
              {studentData.level}
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 14,
            height: 8,
            background: "rgba(255,255,255,0.15)",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${studentData.levelProgress}%`,
              background: COLORS.coral,
              borderRadius: 6,
              transition: "width 0.8s ease",
            }}
          />
        </div>
        <div
          style={{
            marginTop: 6,
            fontSize: 11,
            opacity: 0.8,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Progreso hacia {studentData.nextMilestone}</span>
          <span style={{ fontWeight: 700 }}>{studentData.levelProgress}%</span>
        </div>
      </div>

      {/* === Consejos de la IA === */}
      <div style={{ marginBottom: 18 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: COLORS.inkLight,
            marginBottom: 10,
          }}
        >
          Consejos de tu coach
        </div>
        {aiInsights.map((insight, i) => (
          <div
            key={i}
            style={{
              background: COLORS.paper,
              borderRadius: 14,
              padding: "14px 16px",
              marginBottom: 10,
              border: `1.4px solid ${COLORS.line}`,
              boxShadow: "0 2px 8px -4px rgba(27,58,92,0.08)",
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background:
                  insight.type === "praise"
                    ? "rgba(255,107,91,0.12)"
                    : insight.type === "tip"
                    ? "rgba(74,155,142,0.12)"
                    : insight.type === "focus"
                    ? "rgba(232,162,61,0.12)"
                    : "rgba(27,58,92,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                flexShrink: 0,
              }}
            >
              {insight.icon}
            </div>
            <div style={{ fontSize: 12.5, color: COLORS.text, lineHeight: 1.6, paddingTop: 2 }}>
              {insight.text}
            </div>
          </div>
        ))}
      </div>

      {/* === Estadísticas rápidas === */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          marginBottom: 18,
        }}
      >
        {[
          {
            label: "Horas practicadas",
            value: `${studentData.hoursPracticed}h`,
            sub: `Meta: ${studentData.goalHours}h`,
            color: COLORS.mint,
            bg: "rgba(74,155,142,0.10)",
          },
          {
            label: "Racha actual",
            value: `${studentData.streakDays} días`,
            sub: "¡Sigue así!",
            color: COLORS.coral,
            bg: "rgba(255,107,91,0.10)",
          },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: COLORS.paper,
              borderRadius: 16,
              padding: "16px 14px",
              border: `1px solid ${COLORS.line}`,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 10.5, color: COLORS.textSoft, fontWeight: 700, marginBottom: 6 }}>
              {stat.label}
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: stat.color, fontFamily: "'Fredoka', sans-serif" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 11, color: COLORS.textSoft, marginTop: 2 }}>{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* === Tus lecciones === */}
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: COLORS.inkLight,
            marginBottom: 10,
          }}
        >
          Tus lecciones
        </div>
        {studentData.recentLessons.map((lesson, i) => {
          const style = getLessonStatusStyle(lesson.status);
          return (
            <div
              key={i}
              style={{
                background: COLORS.paper,
                borderRadius: 14,
                padding: "14px 16px",
                marginBottom: 10,
                border: `1.6px solid ${style.border}`,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: style.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  color: style.color,
                  flexShrink: 0,
                }}
              >
                {style.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: lesson.status === "locked" ? COLORS.textSoft : COLORS.ink,
                  }}
                >
                  {lesson.name}
                </div>
                {lesson.status === "in_progress" && (
                  <div style={{ marginTop: 6 }}>
                    <div
                      style={{
                        height: 5,
                        background: COLORS.line,
                        borderRadius: 4,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${lesson.progress}%`,
                          background: COLORS.coral,
                          borderRadius: 4,
                        }}
                      />
                    </div>
                    <div style={{ fontSize: 10, color: COLORS.textSoft, marginTop: 3 }}>
                      {lesson.progress}% completado
                    </div>
                  </div>
                )}
                {lesson.status === "completed" && (
                  <div style={{ fontSize: 11, color: COLORS.mint, marginTop: 2, fontWeight: 600 }}>
                    Puntuación: {lesson.score}/100
                  </div>
                )}
                {lesson.status === "locked" && (
                  <div style={{ fontSize: 11, color: COLORS.textSoft, marginTop: 2 }}>
                    Completa las lecciones anteriores para desbloquear
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* === Áreas de mejora y fortalezas === */}
      <div style={{ marginTop: 8 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: COLORS.inkLight,
            marginBottom: 10,
          }}
        >
          Análisis de tu coach
        </div>
        <div
          style={{
            background: "rgba(232,162,61,0.08)",
            border: `1.4px dashed ${COLORS.warn}`,
            borderRadius: 14,
            padding: "14px 16px",
            marginBottom: 10,
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.warn, marginBottom: 6 }}>
            🎯 Enfócate en mejorar
          </div>
          {studentData.weakAreas.map((area, i) => (
            <div
              key={i}
              style={{
                fontSize: 12.5,
                color: COLORS.text,
                padding: "6px 0",
                borderBottom: i < studentData.weakAreas.length - 1 ? `1px solid ${COLORS.line}` : "none",
              }}
            >
              • {area}
            </div>
          ))}
        </div>
        <div
          style={{
            background: "rgba(74,155,142,0.08)",
            border: `1.4px dashed ${COLORS.mint}`,
            borderRadius: 14,
            padding: "14px 16px",
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.mint, marginBottom: 6 }}>
            💪 Tus fortalezas
          </div>
          {studentData.strongAreas.map((area, i) => (
            <div
              key={i}
              style={{
                fontSize: 12.5,
                color: COLORS.text,
                padding: "6px 0",
                borderBottom: i < studentData.strongAreas.length - 1 ? `1px solid ${COLORS.line}` : "none",
              }}
            >
              • {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 9. Ajustes
function ScreenAjustes({ go }) {
  const rows = [
    "Notificaciones",
    "Idioma de la app",
    "Privacidad",
    "Terminos y Condiciones",
    "Cerrar sesión",
  ];
  return (
    <div style={s.pad}>
      <BackRow onBack={() => go("inicio")} title="Ajustes" />
      {rows.map((r, i) => (
        <div
          key={i}
          style={{ ...s.card, ...s.flexBetween, cursor: "pointer" }}
          onClick={() => r === "Cerrar sesión" && go("splash")}
        >
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: r === "Cerrar sesión" ? COLORS.danger : COLORS.text,
            }}
          >
            {r}
          </span>
          <IconArrowLeft
            size={14}
            color={COLORS.textSoft}
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      ))}
    </div>
  );
}

// 10. Calendario para AGENDAR clase
function ScreenCalendario({ go, setSelectedDay }) {
  const [selected, setSelected] = useState(null);
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleSelect = (d) => {
    if (!AVAILABLE_DAYS.includes(d)) return;
    setSelected(d);
  };

  const goToList = () => {
    setSelectedDay(selected);
    go("clases-del-dia");
  };

  return (
    <div style={s.pad}>
      <BackRow onBack={() => go("inicio")} />
      <div style={s.calHead}>
        <h2 style={{ fontSize: 18, color: COLORS.ink, margin: 0 }}>
          Agendar clase
        </h2>
      </div>
      <p
        style={{
          fontSize: 12,
          color: COLORS.textSoft,
          marginTop: -8,
          marginBottom: 14,
        }}
      >
        Los días resaltados tienen tutores disponibles. Selecciona uno para ver
        las clases del día.
      </p>
      <div style={s.calGrid}>
        {["L", "M", "M", "J", "V"].map((d, i) => (
          <div style={s.calDayLabel} key={i}>
            {d}
          </div>
        ))}
      </div>
      <div style={s.calGrid}>
        {days.map((d) => {
          const isAvailable = AVAILABLE_DAYS.includes(d);
          const isSelected = d === selected;
          return (
            <div
              key={d}
              style={{
                ...s.calCell,
                ...(isSelected
                  ? s.calCellSelected
                  : isAvailable
                    ? s.calCellHasClass
                    : {}),
                ...(!isAvailable ? { opacity: 0.45, cursor: "default" } : {}),
              }}
              onClick={() => handleSelect(d)}
            >
              {d}
            </div>
          );
        })}
      </div>
      <div style={s.classSummary}>
        <div style={{ fontWeight: 700, color: COLORS.ink, fontSize: 14 }}>
          {selected
            ? `Día ${selected} seleccionado`
            : "Selecciona un día disponible"}
        </div>
        <div style={{ fontSize: 12.5, color: COLORS.textSoft, marginTop: 3 }}>
          {selected
            ? `${AVAILABLE_CLASSES_BY_DAY[selected]?.length || 0} clase(s) disponible(s)`
            : "Los días en verde tienen clases para agendar"}
        </div>
      </div>
      <div style={s.btnRow}>
        <button
          className="t2m-btn"
          style={{ ...s.btn, ...s.btnGhost, flex: 1 }}
          onClick={() => go("inicio")}
        >
          Cancelar
        </button>
        <button
          className="t2m-btn"
          style={{
            ...s.btn,
            ...s.btnPrimary,
            flex: 1,
            ...(!selected ? { opacity: 0.5, cursor: "not-allowed" } : {}),
          }}
          disabled={!selected}
          onClick={() => selected && goToList()}
        >
          Ver clases
        </button>
      </div>
    </div>
  );
}

// 11. Clases del día seleccionado
function ScreenClasesDelDia({ go, selectedDay, setClassDetail }) {
  const clases = AVAILABLE_CLASSES_BY_DAY[selectedDay] || [];
  return (
    <div style={s.pad}>
      <BackRow
        onBack={() => go("calendario")}
        title={`Clases del día ${selectedDay}`}
      />
      {clases.length === 0 && (
        <div style={s.emptyTip}>No hay clases disponibles este día.</div>
      )}
      {clases.map((c) => (
        <div style={s.card} key={c.id}>
          <div style={{ ...s.flexBetween, marginBottom: 6 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: COLORS.ink }}>
              {c.tema}
            </span>
            <span style={s.pillTag}>{c.hora}</span>
          </div>
          <div
            style={{ fontSize: 12, color: COLORS.textSoft, marginBottom: 10 }}
          >
            Tutor: {c.tutor} · {c.nivel}
          </div>
          <button
            className="t2m-btn"
            style={{ ...s.btn, ...s.btnPrimary }}
            onClick={() => {
              setClassDetail({
                tema: c.tema,
                tutor: c.tutor,
                hora: c.hora,
                fecha: `Día ${selectedDay} de junio`,
                nivel: c.nivel,
                origen: "agendar",
              });
              go("clase-detalle");
            }}
          >
            Agendar
          </button>
        </div>
      ))}
    </div>
  );
}

// 12. Detalle de clase — reutilizable para "agendar" y "mis-clases"
function ScreenClaseDetalle({ go, classDetail, onEliminar, onAgendar }) {
  const [agendado, setAgendado] = useState(false);

  if (!classDetail) {
    return (
      <div style={s.pad}>
        <BackRow onBack={() => go("inicio")} />
        <div style={s.emptyTip}>No se encontró información de la clase.</div>
      </div>
    );
  }

  const {
    tema,
    tutor,
    hora,
    fecha,
    nivel,
    origen,
    puedeUnirse,
    esLaQueToca,
    esPasada,
  } = classDetail;
  const backTarget = origen === "agendar" ? "clases-del-dia" : "mis-clases";

  const handleConfirmar = () => {
    onAgendar && onAgendar(classDetail);
    setAgendado(true);
    setTimeout(() => {
      setAgendado(false);
      go("mis-clases");
    }, 1800);
  };

  return (
    <div style={s.pad}>
      <BackRow onBack={() => go(backTarget)} />
      <div style={s.classHero}>
        <h2 style={{ margin: "0 0 4px", fontSize: 19 }}>{tema}</h2>
        <div style={{ fontSize: 12.5, opacity: 0.85, lineHeight: 1.6 }}>
          Tutor: {tutor}
          <br />
          Hora: {hora} · Fecha: {fecha}
          {nivel && (
            <>
              <br />
              Nivel: {nivel}
            </>
          )}
        </div>
        {esLaQueToca && (
          <div style={s.badgeLive}>
            <span
              className="t2m-pulse"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "white",
              }}
            ></span>
            Comienza en 12 min
          </div>
        )}
      </div>

      {origen === "agendar" ? (
        <button
          className="t2m-btn"
          style={{
            ...s.btn,
            ...s.btnPrimary,
            ...(agendado ? { opacity: 0.6, cursor: "not-allowed" } : {}),
          }}
          disabled={agendado}
          onClick={handleConfirmar}
        >
          {agendado ? "Agendando…" : "Confirmar agendamiento"}
        </button>
      ) : (
        <div style={{ ...s.btnRow, marginBottom: 18 }}>
          {/* <button
            className="t2m-btn"
            style={{
              ...s.btn,
              ...s.btnGhost,
              flex: 1,
              ...(!esLaQueToca ? { opacity: 0.45, cursor: "not-allowed" } : {}),
            }}
            disabled={!esLaQueToca}
            title={
              esLaQueToca
                ? ""
                : "Solo disponible cuando es la hora correcta de la clase"
            }
          >
            Confirmar
          </button> */}
          <button
            className="t2m-btn"
            style={{ ...s.btn, ...s.btnDanger, flex: 1 }}
            onClick={() => {
              onEliminar && onEliminar(classDetail.id);
              go("mis-clases");
            }}
          >
            Eliminar reunión
          </button>
        </div>
      )}

      <div style={s.sectionLabel}>Participantes</div>
      <div style={s.peopleRow}>
        <div style={s.person}>
          <div style={s.personCircle}>
            <IconUser size={26} color={COLORS.ink} />
          </div>
          <span
            style={{ fontSize: 11, color: COLORS.textSoft, fontWeight: 600 }}
          >
            {tutor}
          </span>
        </div>
        <div style={s.person}>
          <div style={s.personCircle}>
            <IconUser size={26} color={COLORS.coralDark} />
          </div>
          <span
            style={{ fontSize: 11, color: COLORS.textSoft, fontWeight: 600 }}
          >
            Tú
          </span>
        </div>
      </div>

      {origen !== "agendar" && !esPasada && (
        <button
          className="t2m-btn"
          style={{
            ...s.btn,
            ...s.btnPrimary,
            ...(!puedeUnirse ? { opacity: 0.45, cursor: "not-allowed" } : {}),
          }}
          disabled={!puedeUnirse}
          title={puedeUnirse ? "" : "Esta clase aún no ha comenzado"}
          onClick={() => puedeUnirse && go("en-llamada")}
        >
          Unirse a la clase
        </button>
      )}
      {origen !== "agendar" && esPasada && (
        <div style={s.emptyTip}>Esta clase ya finalizó.</div>
      )}

      {/* Toast de confirmación */}
      {agendado && (
        <div className="t2m-toast" style={s.toast}>
          <IconCheck size={16} color="white" />
          ¡Clase agregada correctamente!
        </div>
      )}
    </div>
  );
}

// 13. Actividades (vocabulario y reading)
function ScreenActividades({ go }) {
  const [activeAct, setActiveAct] = useState(null);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [selected, setSelected] = useState(null);

  const VOCAB = [
    {
      word: "Wanderlust",
      def: "Fuerte deseo o impulso de viajar y explorar el mundo.",
    },
    {
      word: "Resilience",
      def: "Capacidad de recuperarse rápidamente de dificultades.",
    },
    { word: "Ambiguous", def: "Que puede interpretarse de más de una manera." },
    {
      word: "Serendipity",
      def: "Descubrimiento afortunado e inesperado de algo bueno.",
    },
    { word: "Ephemeral", def: "Que dura por un período muy corto de tiempo." },
  ];

  const QUIZ = [
    {
      q: "What does 'resilience' mean?",
      opts: [
        "Debilidad",
        "Recuperarse de dificultades",
        "Estar confundido",
        "Viajar mucho",
      ],
      ans: 1,
    },
    {
      q: "Choose the synonym of 'ephemeral':",
      opts: ["Eternal", "Permanent", "Fleeting", "Strong"],
      ans: 2,
    },
    {
      q: "'Serendipity' refers to:",
      opts: [
        "Un plan detallado",
        "Un descubrimiento afortunado",
        "Una sensación de tristeza",
        "Un lugar lejano",
      ],
      ans: 1,
    },
  ];

  const handleQuiz = (i) => {
    setSelected(i);
    setTimeout(() => {
      if (i === QUIZ[quizIdx].ans) setQuizScore((s) => s + 1);
      if (quizIdx + 1 < QUIZ.length) {
        setQuizIdx((q) => q + 1);
        setSelected(null);
      } else {
        setQuizDone(true);
      }
    }, 700);
  };

  const resetQuiz = () => {
    setQuizIdx(0);
    setQuizScore(0);
    setQuizDone(false);
    setSelected(null);
  };

  const activities = [
    {
      id: "vocab",
      label: "Vocabulario",
      sub: "5 palabras nuevas · B1",
      tag: "Nuevo",
      bg: "rgba(255,107,91,0.10)",
      color: COLORS.coralDark,
    },
    {
      id: "reading",
      label: "Reading",
      sub: "Texto corto · comprensión",
      tag: "En curso",
      bg: "rgba(27,58,92,0.09)",
      color: COLORS.ink,
    },
    {
      id: "quiz",
      label: "Quiz rápido",
      sub: "3 preguntas · vocabulario",
      tag: "Pendiente",
      bg: "rgba(74,155,142,0.12)",
      color: COLORS.mint,
    },
  ];

  // — Sub-pantalla Vocabulario —
  if (activeAct === "vocab") {
    return (
      <div style={s.pad}>
        <BackRow onBack={() => setActiveAct(null)} title="Vocabulario" />
        {VOCAB.map((v, i) => (
          <div key={i} style={{ ...s.card }}>
            <div
              style={{
                fontWeight: 800,
                fontSize: 15,
                color: COLORS.ink,
                marginBottom: 4,
              }}
            >
              {v.word}
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: COLORS.textSoft,
                lineHeight: 1.5,
              }}
            >
              {v.def}
            </div>
          </div>
        ))}
        <button
          className="t2m-btn"
          style={{ ...s.btn, ...s.btnPrimary }}
          onClick={() => setActiveAct(null)}
        >
          Completado ✓
        </button>
      </div>
    );
  }

  // — Sub-pantalla Reading —
  if (activeAct === "reading") {
    return (
      <div style={s.pad}>
        <BackRow onBack={() => setActiveAct(null)} title="Reading" />
        <div
          style={{
            ...s.card,
            lineHeight: 1.7,
            fontSize: 13.5,
            color: COLORS.text,
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontWeight: 700,
              color: COLORS.ink,
              fontSize: 14,
            }}
          >
            The Power of Habits
          </p>
          <p style={{ margin: "0 0 10px" }}>
            Every day, we repeat dozens of actions without thinking: brushing
            our teeth, making coffee, or taking the same route to work. These
            are habits — automatic behaviors stored in a part of the brain
            called the <em>basal ganglia</em>.
          </p>
          <p style={{ margin: 0 }}>
            According to researcher Charles Duhigg, every habit follows a loop:{" "}
            <strong>cue → routine → reward</strong>. Understanding this loop
            gives us the power to change unwanted habits and build new, positive
            ones.
          </p>
        </div>
        <div
          style={{
            ...s.card,
            background: "rgba(255,107,91,0.06)",
            border: `1.4px dashed ${COLORS.coral}`,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: COLORS.coralDark,
              marginBottom: 6,
            }}
          >
            Comprensión
          </div>
          <div style={{ fontSize: 12.5, color: COLORS.text }}>
            ¿Qué es el "habit loop" según el texto?
          </div>
          <div
            style={{
              fontSize: 12,
              color: COLORS.textSoft,
              marginTop: 6,
              fontStyle: "italic",
            }}
          >
            Cue (señal) → Routine (rutina) → Reward (recompensa)
          </div>
        </div>
        <button
          className="t2m-btn"
          style={{ ...s.btn, ...s.btnPrimary }}
          onClick={() => setActiveAct(null)}
        >
          Completado ✓
        </button>
      </div>
    );
  }

  // — Sub-pantalla Quiz —
  if (activeAct === "quiz") {
    if (quizDone) {
      return (
        <div style={{ ...s.pad, textAlign: "center" }}>
          <BackRow
            onBack={() => {
              setActiveAct(null);
              resetQuiz();
            }}
            title="Quiz"
          />
          <div
            style={{
              ...s.reportIcon,
              background: "rgba(74,155,142,0.16)",
              marginTop: 20,
            }}
          >
            <IconCheck size={32} color={COLORS.mint} />
          </div>
          <h2 style={{ color: COLORS.ink, fontSize: 20, margin: "12px 0 6px" }}>
            ¡Quiz completado!
          </h2>
          <p
            style={{ color: COLORS.textSoft, fontSize: 13, margin: "0 0 22px" }}
          >
            Respuestas correctas:{" "}
            <strong style={{ color: COLORS.mint }}>
              {quizScore} / {QUIZ.length}
            </strong>
          </p>
          <button
            className="t2m-btn"
            style={{ ...s.btn, ...s.btnPrimary }}
            onClick={() => {
              setActiveAct(null);
              resetQuiz();
            }}
          >
            Volver a actividades
          </button>
          <button
            className="t2m-btn"
            style={{ ...s.btn, ...s.btnGhost, marginTop: 10 }}
            onClick={resetQuiz}
          >
            Intentar de nuevo
          </button>
        </div>
      );
    }
    const q = QUIZ[quizIdx];
    return (
      <div style={s.pad}>
        <BackRow
          onBack={() => {
            setActiveAct(null);
            resetQuiz();
          }}
          title="Quiz rápido"
        />
        <div style={{ fontSize: 11, color: COLORS.textSoft, marginBottom: 14 }}>
          Pregunta {quizIdx + 1} de {QUIZ.length}
        </div>
        <div
          style={{
            ...s.card,
            fontSize: 14,
            fontWeight: 700,
            color: COLORS.ink,
            textAlign: "center",
            padding: "20px 16px",
          }}
        >
          {q.q}
        </div>
        {q.opts.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.ans;
          const showResult = selected !== null;
          let bg = COLORS.paper,
            border = COLORS.line,
            color = COLORS.text;
          if (showResult && isSelected && isCorrect) {
            bg = "rgba(74,155,142,0.15)";
            border = COLORS.mint;
            color = COLORS.mint;
          }
          if (showResult && isSelected && !isCorrect) {
            bg = "rgba(209,72,72,0.10)";
            border = COLORS.danger;
            color = COLORS.danger;
          }
          if (showResult && !isSelected && isCorrect) {
            bg = "rgba(74,155,142,0.10)";
            border = COLORS.mint;
          }
          return (
            <div
              key={i}
              onClick={() => selected === null && handleQuiz(i)}
              style={{
                border: `1.6px solid ${border}`,
                borderRadius: 12,
                padding: "12px 14px",
                marginBottom: 10,
                cursor: selected === null ? "pointer" : "default",
                background: bg,
                color,
                fontWeight: isSelected ? 700 : 500,
                fontSize: 13.5,
                transition: "all .15s",
              }}
            >
              {opt}
            </div>
          );
        })}
      </div>
    );
  }

  // — Listado de actividades —
  return (
    <div style={s.pad}>
      <BackRow onBack={() => go("inicio")} title="Actividades" />
      <p
        style={{
          fontSize: 12.5,
          color: COLORS.textSoft,
          margin: "-4px 0 18px",
        }}
      >
        Practica entre clases con estos ejercicios cortos.
      </p>
      {activities.map((a) => (
        <div
          key={a.id}
          style={{ ...s.actCard, ...s.flexBetween }}
          className="t2m-tile"
          onClick={() => setActiveAct(a.id)}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: a.bg,
                color: a.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <IconBook size={20} color={a.color} />
            </div>
            <div>
              <div
                style={{ fontWeight: 700, fontSize: 13.5, color: COLORS.ink }}
              >
                {a.label}
              </div>
              <div style={{ fontSize: 11.5, color: COLORS.textSoft }}>
                {a.sub}
              </div>
            </div>
          </div>
          <span style={s.pillTag}>{a.tag}</span>
        </div>
      ))}
    </div>
  );
}

// 14. Mis clases: historial + próximas
function ScreenMisClases({ go, myClasses, setClassDetail }) {
  const proximas = myClasses.filter((c) => c.estado === "proxima");
  const pasadas = myClasses.filter((c) => c.estado === "pasada");

  const openDetail = (c) => {
    setClassDetail({
      id: c.id,
      tema: c.tema,
      tutor: c.tutor,
      hora: c.hora,
      fecha: c.fecha,
      origen: "mis-clases",
      puedeUnirse: c.puedeUnirse,
      esLaQueToca: c.puedeUnirse,
      esPasada: c.estado === "pasada",
    });
    go("clase-detalle");
  };

  const ClassRow = ({ c }) => (
    <div
      style={{ ...s.card, ...s.flexBetween, cursor: "pointer" }}
      onClick={() => openDetail(c)}
    >
      <div>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: COLORS.ink }}>
          {c.tema}
        </div>
        <div style={{ fontSize: 11.5, color: COLORS.textSoft }}>
          {c.tutor} · {c.fecha} · {c.hora}
        </div>
      </div>
      {c.estado === "proxima" ? (
        <span
          style={{
            ...s.pillTag,
            ...(!c.puedeUnirse
              ? { background: "rgba(122,122,122,0.15)", color: COLORS.textSoft }
              : {}),
          }}
        >
          {c.puedeUnirse ? "Unirse activo" : "Aún no inicia"}
        </span>
      ) : (
        <span
          style={{
            ...s.pillTag,
            background: "rgba(122,122,122,0.15)",
            color: COLORS.textSoft,
          }}
        >
          Finalizada
        </span>
      )}
    </div>
  );

  return (
    <div style={s.pad}>
      <BackRow onBack={() => go("inicio")} title="Mis clases" />
      <div style={s.sectionLabel}>Próximas</div>
      {proximas.length === 0 && (
        <div style={s.emptyTip}>No tienes clases próximas.</div>
      )}
      {proximas.map((c) => (
        <ClassRow c={c} key={c.id} />
      ))}
      <div style={s.sectionLabel}>Pasadas</div>
      {pasadas.length === 0 && (
        <div style={s.emptyTip}>Aún no tienes clases pasadas.</div>
      )}
      {pasadas.map((c) => (
        <ClassRow c={c} key={c.id} />
      ))}
    </div>
  );
}

// 14. En llamada (Grabando)
// 14. En llamada (Grabando)
function ScreenLlamada({ go }) {
  const [muted, setMuted] = useState(false);
  const [camOff, setCamOff] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comentario, setComentario] = useState("");

  // 1. NUEVO ESTADO: Guarda un arreglo con las etiquetas seleccionadas
  const [selectedTags, setSelectedTags] = useState([]);

  const handleColgar = () => setShowForm(true);

  // Función para alternar (añadir/quitar) etiquetas del arreglo
  const handleToggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag)); // La quita si ya estaba
    } else {
      setSelectedTags([...selectedTags, tag]); // La agrega si no estaba
    }
  };

  const handleEnviar = () => {
    setShowForm(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      go("inicio");
    }, 2000);
  };

  const overlay = {
    position: "absolute",
    inset: 0,
    background: "rgba(10,20,32,0.72)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    zIndex: 10,
  };
  const modal = {
    background: COLORS.paper,
    borderRadius: "22px 22px 0 0",
    padding: "24px 20px 28px",
    width: "100%",
  };
  const successBox = {
    position: "absolute",
    inset: 0,
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(10,20,32,0.72)",
  };
  const successCard = {
    background: COLORS.paper,
    borderRadius: 20,
    padding: "28px 24px",
    textAlign: "center",
    margin: "0 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  };

  return (
    <div style={{ ...s.callScreen, position: "relative" }}>
      <div style={s.callTopbar}>
        <span
          className="t2m-pulse"
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: COLORS.coral,
          }}
        ></span>
        Transcribiendo
      </div>
      <div style={s.callMain}>
        <div style={s.callNameTag}>Personal 1 · Tutor</div>
        <div style={{ opacity: 0.9 }}>
          <IconUser size={84} color="rgba(255,255,255,0.55)" />
        </div>
        <div style={s.pip}>
          {camOff ? (
            <IconCamOff size={26} color="rgba(255,255,255,0.6)" />
          ) : (
            <IconUser size={30} color="rgba(255,255,255,0.7)" />
          )}
        </div>
      </div>
      <div style={s.callToolbar}>
        <button
          style={{ ...s.callBtn, ...(muted ? s.callBtnEnd : {}) }}
          onClick={() => setMuted((m) => !m)}
          title="Micrófono"
        >
          {muted ? <IconMicOff size={20} /> : <IconMic size={20} />}
        </button>
        <button
          style={{ ...s.callBtn, ...(camOff ? s.callBtnEnd : {}) }}
          onClick={() => setCamOff((c) => !c)}
          title="Cámara"
        >
          {camOff ? <IconCamOff size={20} /> : <IconVideo size={20} />}
        </button>
        <button
          style={{ ...s.callBtn, ...s.callBtnReport }}
          onClick={() => go("reportar")}
          title="Reportar inconveniente"
        >
          <IconAlert size={20} />
        </button>
        <button
          style={{ ...s.callBtn, ...s.callBtnEnd }}
          onClick={handleColgar}
          title="Colgar"
        >
          <IconPhoneOff size={20} />
        </button>
      </div>

      {/* ── Modal de retroalimentación ── */}
      {showForm && (
        <div style={overlay}>
          <div style={modal}>
            <h2
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 18,
                color: COLORS.ink,
                margin: "0 0 4px",
                textAlign: "center",
              }}
            >
              ¿Cómo estuvo la clase?
            </h2>
            <p
              style={{
                fontSize: 12.5,
                color: COLORS.textSoft,
                textAlign: "center",
                margin: "0 0 16px",
              }}
            >
              Tu opinión nos ayuda a mejorar
            </p>

            {/* Estrellas */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => setRating(star)}
                  style={{
                    fontSize: 30,
                    cursor: "pointer",
                    lineHeight: 1,
                    color:
                      star <= (hovered || rating) ? "#F5A623" : COLORS.line,
                    transition: "color .1s",
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Etiquetas rápidas */}
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: COLORS.inkLight,
                marginBottom: 8,
              }}
            >
              ¿Qué destacarías?
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 7,
                marginBottom: 14,
              }}
            >
              {[
                "Buen ritmo",
                "Clara explicación",
                "Puntual",
                "Dinámico",
                "Vocabulario útil",
              ].map((tag) => {
                // 2. COMPROBACIÓN: ¿Esta etiqueta está seleccionada?
                const isSelected = selectedTags.includes(tag);

                return (
                  <span
                    key={tag}
                    onClick={() => handleToggleTag(tag)}
                    style={{
                      fontSize: 11.5,
                      fontWeight: 600,
                      padding: "5px 11px",
                      borderRadius: 20,
                      cursor: "pointer",
                      // Si está seleccionado usa el color coral, si no, usa el gris sutil de siempre
                      background: isSelected
                        ? COLORS.coral
                        : "rgba(27,58,92,0.08)",
                      color: isSelected ? "#FFFFFF" : COLORS.ink,
                      border: isSelected
                        ? `1.4px solid ${COLORS.coral}`
                        : `1.4px solid ${COLORS.line}`,
                      transition: "all 0.2s ease",
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>

            {/* Comentario */}
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Comentario adicional (opcional)…"
              rows={2}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "10px 12px",
                borderRadius: 12,
                border: `1.6px solid ${COLORS.line}`,
                fontFamily: "inherit",
                fontSize: 13,
                color: "#fffdfd", // ¡Corregido! Antes tenías "#fffdfd" y no se leía lo que escribías.
                resize: "none",
                outline: "none",
                marginBottom: 16,
              }}
            />

            <div style={s.btnRow}>
              <button
                className="t2m-btn"
                style={{ ...s.btn, ...s.btnGhost, flex: 1 }}
                onClick={() => {
                  setShowForm(false);
                  go("inicio");
                }}
              >
                Omitir
              </button>
              <button
                className="t2m-btn"
                style={{ ...s.btn, ...s.btnPrimary, flex: 1 }}
                onClick={handleEnviar}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Pop-up de éxito ── */}
      {showSuccess && (
        <div style={successBox}>
          <div className="t2m-toast" style={successCard}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(74,155,142,0.15)",
                border: `2px solid ${COLORS.mint}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconCheck size={30} color={COLORS.mint} />
            </div>
            <div
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 17,
                color: COLORS.ink,
                fontWeight: 700,
              }}
            >
              ¡Enviado correctamente!
            </div>
            <div style={{ fontSize: 12.5, color: COLORS.textSoft }}>
              Gracias por tu retroalimentación
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 15. Reportar inconveniente
function ScreenReportar({ go }) {
  return (
    <div
      style={{
        ...s.pad,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <div style={s.reportIcon}>
        <IconAlert size={36} color={COLORS.warn} />
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: COLORS.ink, fontSize: 20, margin: "0 0 6px" }}>
          Reportar inconveniente
        </h2>
        <p style={{ color: COLORS.textSoft, fontSize: 13, margin: 0 }}>
          ¿Ocurrió algo durante la clase que quieras informarnos?
        </p>
      </div>
      <div style={{ ...s.btnRow, marginTop: 24 }}>
        <button
          className="t2m-btn"
          style={{ ...s.btn, ...s.btnPrimary, flex: 1 }}
          onClick={() => go("reporte-generado")}
        >
          Sí
        </button>
        <button
          className="t2m-btn"
          style={{ ...s.btn, ...s.btnGhost, flex: 1 }}
          onClick={() => go("en-llamada")}
        >
          Cancelar
        </button>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          color: COLORS.textSoft,
          marginTop: 18,
          lineHeight: 1.6,
        }}
      >
        Se finaliza la llamada y se genera un reporte para el equipo de soporte.
      </p>
    </div>
  );
}

// 16. Reporte generado
function ScreenReporteGenerado({ go }) {
  return (
    <div
      style={{
        ...s.pad,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ ...s.reportIcon, background: "rgba(74,155,142,0.16)" }}>
        <IconFlag size={32} color={COLORS.mint} />
      </div>
      <h2 style={{ color: COLORS.ink, fontSize: 19, margin: "0 0 8px" }}>
        Reporte enviado
      </h2>
      <p style={{ color: COLORS.textSoft, fontSize: 13, margin: "0 0 22px" }}>
        Nuestro equipo revisará lo ocurrido y se pondrá en contacto contigo si
        necesita más información.
      </p>
      <button
        className="t2m-btn"
        style={{ ...s.btn, ...s.btnPrimary }}
        onClick={() => go("inicio")}
      >
        Volver al inicio
      </button>
    </div>
  );
}

/* ===================== App shell ===================== */
const SCREENS = {
  splash: { c: ScreenSplash, label: "Selección de perfil" },
  login: { c: ScreenLogin, label: "P. Ingreso" },
  recuperar: { c: ScreenRecuperar, label: "Recuperar contraseña" },
  "reg-univ": { c: ScreenRegUniv, label: "P. Universitario" },
  "reg-estud": { c: ScreenRegEstud, label: "P. Estudiante" },
  soporte: { c: ScreenSoporte, label: "Contacto y soporte" },
  inicio: { c: ScreenInicio, label: "P. Inicio" },
  actividades: { c: ScreenActividades, label: "Actividades" },
  progreso: { c: ScreenProgreso, label: "Progreso" },
  ajustes: { c: ScreenAjustes, label: "Ajustes" },
  calendario: { c: ScreenCalendario, label: "Agendar clase" },
  "clases-del-dia": { c: ScreenClasesDelDia, label: "Clases del día" },
  "mis-clases": { c: ScreenMisClases, label: "Mis clases" },
  "clase-detalle": { c: ScreenClaseDetalle, label: "Detalle de clase" },
  "en-llamada": { c: ScreenLlamada, label: "En llamada" },
  reportar: { c: ScreenReportar, label: "Reportar inconveniente" },
  "reporte-generado": { c: ScreenReporteGenerado, label: "Reporte enviado" },
};

export default function Talk2MeApp() {
  const [screenKey, setScreenKey] = useState("splash");
  const [selectedDay, setSelectedDay] = useState(null);
  const [classDetail, setClassDetail] = useState(null);
  const [myClasses, setMyClasses] = useState(MY_CLASSES_INIT);

  const go = (key) => setScreenKey(key);
  const goHome = () => setScreenKey("inicio");

  const handleEliminar = (id) =>
    setMyClasses((prev) => prev.filter((c) => c.id !== id));

  const handleAgendar = (classDetail) => {
    const nueva = {
      id: `new-${Date.now()}`,
      estado: "proxima",
      tutor: classDetail.tutor,
      tema: classDetail.tema,
      fecha: classDetail.fecha,
      hora: classDetail.hora,
      puedeUnirse: false,
    };
    setMyClasses((prev) => [nueva, ...prev]);
  };

  const Current = SCREENS[screenKey].c;
  const isCallScreen = screenKey === "en-llamada";

  return (
    <div style={s.page}>
      <FontImport />
      <div style={s.stage}>
        <div style={s.headerWrap}>
          <div style={s.headerMark}>
            <LogoMark size={26} />
            <span
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: COLORS.ink,
              }}
            >
              Talk2Me
            </span>
          </div>
          <p style={s.headerP}>
            Prototipo navegable — practica de idiomas con tutores en vivo
          </p>
        </div>

        <div style={s.phone}>
          <div style={s.notch}>
            <div style={s.pill}></div>
          </div>
          <div className="t2m-hide-scroll" style={s.screen}>
            <Current
              go={go}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              classDetail={classDetail}
              setClassDetail={setClassDetail}
              myClasses={myClasses}
              onEliminar={handleEliminar}
              onAgendar={handleAgendar}
            />
          </div>
          {!isCallScreen && (
            <div style={s.homeBarWrap}>
              <HomeButton onClick={goHome} />
            </div>
          )}
        </div>

        <div style={s.crumbs}>
          Pantalla actual:{" "}
          <b style={{ color: COLORS.ink }}>{SCREENS[screenKey].label}</b>
        </div>
      </div>
    </div>
  );
}
