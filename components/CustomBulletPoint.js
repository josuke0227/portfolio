export default function CustomBulletPoint({
  children,
  size = "24px",
  btSpacing = "",
}) {
  return (
    <div style={{ display: "flex" }} className="px-2">
      <div style={{ position: "relative", display: "inline-block" }}>
        <span
          className="material-icons"
          style={{ color: "#54d3d1", fontSize: size }}
        >
          signal_cellular_0_bar
        </span>
        <span
          className="material-icons"
          style={{
            color: "#0a1110",
            position: "absolute",
            top: 0,
            left: 0,
            transform: "rotate(180deg)",
            fontSize: size,
          }}
        >
          signal_cellular_0_bar
        </span>
      </div>
      {children}
    </div>
  );
}
