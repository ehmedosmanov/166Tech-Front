const navbarItems = [
    { name: "Əsas səhifə", path: "/" },
    { name: "Şirkətimiz", path: "/about" },
    {
        name: "Xidmətlər",
        path: "#",
        dropdown: [
            { name: "Haqqımızdaa", path: "/about-us" },
            { name: "Bizim Komanda", path: "/our-team" },
        ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Əlaqə", path: "/contact" },
];

export default navbarItems;
