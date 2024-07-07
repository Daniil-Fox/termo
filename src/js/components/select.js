const select = document.querySelectorAll(".select");

select.forEach((s) => {
  const rSelect = s.querySelector("select");

  const selectHeader = s.querySelector(".select__header");
  const selectInfo = selectHeader.querySelector(".select__info");

  const selectBody = s.querySelector(".select__body");
  const selectItems = selectBody.querySelectorAll(".select__item");

  selectHeader?.addEventListener("click", (e) => {
    e.preventDefault();

    let isActive = s.classList.toggle("active");

    selectBody.style.maxHeight = isActive
      ? selectBody.scrollHeight + "px"
      : null;
  });

  selectItems?.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      selectInfo.innerHTML = item.innerHTML;
      s.classList.remove("active");
      selectBody.style.maxHeight = null;

      rSelect.selectedIndex = index;
    });
  });
});
