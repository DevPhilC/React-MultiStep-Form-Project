export default function TextInput({ placeholder, updateValue }) {
  return (
    <input
      type="text"
      onChange={(e) => updateValue(e.target.value)}
      placeholder={placeholder}
    />
  );
}
