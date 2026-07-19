export default function Button({
  as: Component = "button",
  className = "",
  magnetic = false,
  type = undefined,
  ...props
}) {
  const elementProps = {
    ...props,
    className: `button-interaction ${className}`.trim(),
    ...(magnetic ? { "data-magnetic": "" } : {}),
  };

  if (Component === "button") {
    elementProps.type = type || "button";
  }

  return <Component {...elementProps} />;
}
