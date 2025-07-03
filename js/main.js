document.addEventListener("DOMContentLoaded", function () {
  const inputPlate = document.getElementById("textPlateInput");
  const selectProvince = document.getElementById("selectProvince");

  // ฟังก์ชันอัปเดตข้อมูลป้ายทะเบียน
  function updatePlates() {
    const plateNumber = inputPlate.value.trim();
    const provinceText = selectProvince.options[selectProvince.selectedIndex].text;

    // อัปเดตทุกป้ายที่มี class "number" และ "plateProvince"
    document.querySelectorAll(".number").forEach(el => {
      el.textContent = plateNumber || "ຄພ 9963";
    });

    document.querySelectorAll(".plateProvince").forEach(el => {
      if (selectProvince.value === "PleaseSelectPlateProvince") {
        el.textContent = "ນະຄອນຫຼວງວຽງຈັນ"; // ค่าเริ่มต้น
      } else {
        el.textContent = provinceText.split(" / ")[0]; // เอาเฉพาะภาษาลาว
      }
    });
  }

  // ฟัง event ตอน input หรือ select เปลี่ยนค่า
  inputPlate.addEventListener("input", updatePlates);
  selectProvince.addEventListener("change", updatePlates);
});
