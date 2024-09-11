const navbarItems = [
    { name: "Əsas səhifə", path: "/" },
    { name: "Komandamız", path: "/our-team" },
    {
        name: "Xidmətlər",
        path: "#",
        dropdown: [
            { name: "Haqqımızdaa", path: "/about-us" },
            { name: "Şirkətimiz", path: "/company" },
        ],
    },
    { name: "Bizim Media", path: "/our-media" },
    { name: "Əlaqə", path: "/contact" },
];

export default navbarItems;
