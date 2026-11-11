
const burger = document.getElementById("burger");
const navigation = document.getElementById("navigation");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});

// Menyudan tashqariga bosilganda yopish

document.addEventListener("click", (e) => {
    if (
        !burger.contains(e.target) &&
        !navigation.contains(e.target)
    ) {
        burger.classList.remove("active");
        navigation.classList.remove("active");

        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Open menu");
    }
});

// Link bosilganda menyuni yopish

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        navigation.classList.remove("active");

        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Open menu");
    });
});
