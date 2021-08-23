window.addEventListener("load", function(e) {
    /*============FIXED HEADER==============*/

    const headerFixed = document.querySelector(".header");
    window.addEventListener("scroll", function(e) {
        if (this.scrollY >= 200) {
            headerFixed.classList.add("is-fixed");
        } else {
            headerFixed.classList.remove("is-fixed");
        }
    });

    /* =======MENU TAB==============*/
    const menuBtn = document.querySelectorAll(".btn-menu");
    const menuItem = document.querySelectorAll(".menu-item");
    const list = document.querySelector(".menu-container__list");
    const menuLink = document.querySelectorAll(".menu-link");

    /*Show All Food*/
    [...menuItem].forEach((item) => {
        item.classList.add("active-food");
    });

    /* show active-food*/
    [...menuBtn].forEach((item) =>
        item.addEventListener("click", function(e) {
            [...menuBtn].forEach((item) => item.classList.remove("active"));
            e.target.classList.add("active");

            // lấy data food

            const tabNumber = e.currentTarget.dataset.food;
            [...menuItem].forEach((item) => {
                item.classList.remove("active-food");

                if (tabNumber === "1") {
                    item.classList.add("active-food");
                }

                if (item.getAttribute("data-food") === tabNumber) {
                    item.classList.add("active-food");
                }
            });
        })
    );

    /*-===============Add cart number=-===============*/
    // let numberValue = parseInt(number.textContent);
    [...menuLink].forEach((item) =>
        item.addEventListener("click", function(e) {
            e.preventDefault(); // ngăn chặn hành vi mặc định

            // thêm ++
            // numberValue++;
            // number.textContent = numberValue;
        })
    );

    /*===== TẠO HÀM ALERT=========*/
    function sweetAlert(title) {
        const template = ` <div class="sweet-alert">
<i class="fa fa-check sweet-icon"></i>
<p class="sweet-text">${title}</p>
</div>`;

        document.body.insertAdjacentHTML("beforeend", template);
    }

    /*=====SCROLL TOP======*/
    const scrollTop = document.querySelector(".scroll-top");

    window.addEventListener("scroll", function(e) {
        if (this.scrollY >= 500) {
            scrollTop.classList.add("scrolltop-active");
        } else {
            scrollTop.classList.remove("scrolltop-active");
        }
    });

    /*====NOTI=======*/
    function noti(title = "Nguyễn Huy Hoàng", img) {
        const templateNoti = `<div class="noti d-flex">
        <img src="https://source.unsplash.com/random" alt="" class="noti-image">
        <div class="noti-content">
            <h3 class="noti-data">${title}</h3>
            <p class="noti-desc">
                Đã mua 1 sản phẩm lorem <br> <span>vừa xong</span>
            </p>
        </div>
    </div>`;

        document.body.insertAdjacentHTML("beforeend", templateNoti);
    }

    const randomTitle = [
        "Nguyễn Huy Hoàng",
        "Trần Anh Tuấn",
        "Nguyễn Thị Thúy",
        "Bùi Hoàng Hải",
        "Phạm Văn Thành",
    ];

    let lastTitle;
    const timer = setInterval(function() {
        const itemNoti = document.querySelector(".noti");
        if (itemNoti) {
            itemNoti.parentNode.removeChild(itemNoti);
        }
        const title = randomTitle[Math.floor(Math.random() * randomTitle.length)];
        if (lastTitle !== title) {
            noti(title);
        }
        lastTitle = title;
    }, 8000);

    /*=========TOGGLE MENU=============*/
    const toggleMenu = document.querySelector(".menu-toggle");
    const headerMenu = document.querySelector(".header-menu");
    const itemLink = document.querySelectorAll(".item-link");

    toggleMenu.addEventListener("click", function(e) {
        headerMenu.classList.toggle("is-show");
        toggleMenu.classList.toggle("fa-bars");
        toggleMenu.classList.toggle("fa-times");
    });

    [...itemLink].forEach((item) =>
        item.addEventListener("click", function(e) {
            headerMenu.classList.remove("is-show");
            toggleMenu.classList.toggle("fa-bars");
            toggleMenu.classList.toggle("fa-times");
        })
    );

    document.addEventListener("click", function(e) {
        if (!headerMenu.contains(e.target) && !e.target.matches(".menu-toggle")) {
            headerMenu.classList.remove("is-show");
            toggleMenu.classList.add("fa-bars");
            toggleMenu.classList.remove("fa-times");
        }
    });

    //=============

    let carts = document.querySelectorAll(".menu-link");

    let products = [{
            name: "Barbecue salad",
            tag: "plate1",
            price: 22,
            inCarrt: 0,
        },
        {
            name: "Barbecue salad",
            tag: "plate2",
            price: 30,
            inCarrt: 0,
        },
        {
            name: "Barbecue salad",
            tag: "plate3",
            price: 25,
            inCarrt: 0,
        },
        {
            name: "Barbecue salad",
            tag: "plate1",
            price: 27,
            inCarrt: 0,
        },
        {
            name: "Barbecue salad",
            tag: "plate2",
            price: 10,
            inCarrt: 0,
        },
        {
            name: "Barbecue salad",
            tag: "plate1",
            price: 20,
            inCarrt: 0,
        },
        {
            name: "Barbecue salad",
            tag: "plate3",
            price: 15,
            inCarrt: 0,
        },
        {
            name: "Barbecue salad",
            tag: "plate2",
            price: 20,
            inCarrt: 0,
        },
    ];

    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener("click", () => {
            cartNumber(products[i]);
            totalCost(products[i]);
        });
    }

    function onLoadCartNumbers() {
        let productNumber = localStorage.getItem("cartNumber");

        if (productNumber) {
            document.querySelector(".number").textContent = productNumber;
        }
    }

    // === cartNumbeer
    function cartNumber(product) {
        let productNumber = localStorage.getItem("cartNumber");

        productNumber = parseInt(productNumber);
        if (productNumber) {
            localStorage.setItem("cartNumber", productNumber + 1);
            document.querySelector(".number").textContent = productNumber + 1;
        } else {
            localStorage.setItem("cartNumber", 1);
            document.querySelector(".number").textContent = 1;
        }
        // Hieenern thị thông báo
        let lastTitle;
        const alertCart = document.querySelector(".sweet-alert");
        if (alertCart) {
            alertCart.parentNode.removeChild(alertCart);
        }
        if (alertCart) {
            setTimeout(function() {
                sweetAlert("Add new 1 cart");
            }, 0);
        }
        setItems(product);
    }

    // === objcet tag
    function setItems(product) {
        let cartItems = localStorage.getItem("productsIncart");
        cartItems = JSON.parse(cartItems);

        if (Array.isArray(cartItems) && cartItems.length > 0) {
            [...cartItems].forEach((item) => products(item));
        }

        if (cartItems != null) {
            if (cartItems[product.tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product,
                };
            }
            cartItems[product.tag].inCarrt += 1;
        } else {
            product.inCarrt = 1;
            cartItems = {
                [product.tag]: product,
            };
        }
        localStorage.setItem("productsIncart", JSON.stringify(cartItems));
    }

    // =-- GIÁ
    function totalCost(product) {
        // console.log("price", product.price);
        let cartCost = localStorage.getItem("totalCost");
        console.log("My cartCost", cartCost);

        if (cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        } else {
            localStorage.setItem("totalCost", product.price);
        }
    }

    function displatCart() {
        let cartItems = localStorage.getItem("productsIncart");
        let cartCost = localStorage.getItem("totalCost");
        cartItems = JSON.parse(cartItems);
        let products = document.querySelector(".products");

        if (cartItems && products) {
            products.innerHTML = "";
            Object.values(cartItems).map((item) => {
                products.innerHTML += `
            <div class="todo">
                <div class="product">
                    <i class="fa fa-times-circle icon-times" aria-hidden="true"></i>
                    <img src="./assets/img/${
                      item.tag
                    }.png" alt="" class="menu-image">
                    <span>${item.name}</span>
                </div>
                <div class="price">
                    $${item.price},00
                </div>
                <div class="quanlity">
                    ${item.inCarrt}
                </div>
                <div class="total">
                   $${item.inCarrt * item.price},00
                </div>
            </div>
        `;
            });

            products.innerHTML += `
            <div class = "basketTotalContainer">
                <h4 class = "backet-title">
                    Basket Total
                </h4>
                <h4 class= "basketTotal">
                    $${cartCost},00
                </h4>
            <div>
        `;
        }
    }

    onLoadCartNumbers();
    displatCart();

    const productsRemove = document.querySelector(".products");
    const backet = document.querySelector(".basketTotal");
    const totalCart = document.querySelector(".total");
    let cartItemsK =
        localStorage.length > 0 ?
        JSON.parse(localStorage.getItem("productsIncart")) :
        [];

    if (Array.isArray(cartItemsK) && cartItemsK.length > 0) {
        [...cartItemsK].forEach((item) => todo(item.tag));
    }
    productsRemove.addEventListener("click", function(e) {
        if (e.target.matches(".icon-times")) {
            const productList = e.target.parentNode.parentNode;
            productList.parentNode.removeChild(productList);

            localStorage.removeItem("productsIncart");
            localStorage.removeItem("cartNumber");
            localStorage.removeItem("totalCost");
            // localStorage.clear();
        }
    });
});