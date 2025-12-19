export default function Button({ label, variant = "primary" }) {
  const base =
    "px-6 py-3 rounded-md font-medium transition";

  const styles = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    outline:
      "border border-white text-white hover:bg-white hover:text-blue-700",
  };

  return <button className={`${base} ${styles[variant]}`}>{label}</button>;
}
