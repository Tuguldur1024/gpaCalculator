const oneField = () => {
  return (
    <div className="flex bg-white gap-10">
      <select name="Дүн">
        <option selected> Дүн </option>
        <option value={4}> A / 95-100 </option>
        <option value={3.6}>A- / 90-94</option>
        <option value={3.1}> B / 85-89</option>
        <option value={2.7}> B- / 80-84</option>
        <option value={2.3}> C /75-79 </option>
        <option value={1.9}> C- /70-74 </option>
        <option value={1.4}> D /65-69 </option>
        <option value={1}> D- /60-64 </option>
        <option value={0}> F /0-59 </option>
      </select>
      <select name="">
        <option defaultChecked> Кредит</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </div>
  );
};
export default oneField;
