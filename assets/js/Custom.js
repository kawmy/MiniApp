function handleCustomeMenu(n) {
   $("#phoneFooter").text(n.Phone);
   $("#fixPhone1Footer").text(n.FixPhone);
   $("#fixPhone2Footer").text(n.FixPhone2);
   $("#addressFooter").text("شیراز ، محمودیه ، نبش کوچه 4 ");
   $("#addressFooter").attr("href", `https://maps.google.com/?q=29.671044,52.491352`);
   $("#phoneFooter").attr("href", `tel:${n.Phone}`);
   $("#fixPhone1Footer").attr("href", `tel:${n.FixPhone}`);
   $("#fixPhone2Footer").attr("href", `tel:${n.FixPhone2}`);
   n.EnamadCode != null && $("#enamadUrl").html(`${n.EnamadCode}`);
   n.Facebook != null && ($("#facebookId").removeClass("d-none"), $("#facebookId").attr("href", "https://www.facebook.com/" + n.Facebook));
   n.Twitter != null && ($("#twitterId").removeClass("d-none"), $("#twitterId").attr("href", "https://twitter.com/" + n.Twitter));
   n.Instagram != null && ($("#instagramId").removeClass("d-none"), $("#instagramId").attr("href", "https://www.instagram.com/" + "GishaCafe"), $("#instagramHeader").attr("href", "https://www.instagram.com/" + "GishaCafe"), $("#instagramHeader2").attr("href", "https://www.instagram.com/" + "GishaCafe"));
   n.Latitude !== "35.6993751" && ($("#mapLatLang").removeClass("d-none"), $("#mapLatLang").attr("href", `https://maps.google.com/?q=29.671044,52.491352`));
   n.Whatsapp != null && ($("#whatsappId").removeClass("d-none"), $("#whatsappId").attr("href", "https://wa.me/" + n.Whatsapp));
   n.Telegram != null && ($("#telegramId").removeClass("d-none"), $("#telegramId").attr("href", "https://t.me/" + n.Telegram));
   n.IsActiveTranslate === !0 && ($("#translateLogo").removeClass("d-none"), n.IsShowFirstViewTranslatePopup === !0 && $.cookie("IsShowFirstViewTranslatePopup") != "Yes" && (viewLanguage(), $.cookie("IsShowFirstViewTranslatePopup", "Yes", {
      expires: 1e3
   })));
   n.IsActiveFeedback === !0 && n.IsActiveCreateFeedback === !0 && ($("#feedBackBt").removeClass("d-none"), setTimeout(function () {
      $("#feedBackBt").removeClass("btn-35")
   }, 1e3), setTimeout(function () {
      $("#feedBackBt").addClass("btn-35");
      $("#txtfeedBack").remove()
   }, 6e3));
   n.IsActiveCallWaiter === !0 && $("#callWaitorLogo").removeClass("d-none");
   n.IsWorkWithUs === !0 && $("#workWithUsSideBar").removeClass("d-none");
   n.IsActiveTableReservation === !0 && $("#reservation").removeClass("d-none");
   n.IsActiveCallWaiter === !0 && ($("#callWaiter").removeClass("d-none"), $("#callWaiterBt").removeClass("d-none"), setTimeout(function () {
      $("#callWaiterBt").removeClass("btn-35")
   }, 1e3), setTimeout(function () {
      $("#callWaiterBt").addClass("btn-35");
      $("#callWaitertxt").removeClass("rotate-shake");
      $("#txtcallll").remove()
   }, 6e3));
   n.IsShowFirstViewTranslatePopup === !0 && $.cookie("IsShowFirstViewTranslatePopup") != "Yes" && (viewLanguage(), $.cookie("IsShowFirstViewTranslatePopup", "Yes", {
      expires: 1e3
   }))
}

function iOS_version() {
   if (userAgent.match(/ipad|iphone|ipod/i)) {
      var n = {};
      return n.User_Agent = userAgent, n.As_Reported = userAgent.match(/OS (\d)?\d_\d(_\d)?/i)[0], n.Major_Release = userAgent.match(/OS (\d)?\d_\d(_\d)?/i)[0].split("_")[0], n.Full_Release = userAgent.match(/OS (\d)?\d_\d(_\d)?/i)[0].replace(/_/g, "."), n.Major_Release_Numeric = +userAgent.match(/OS (\d)?\d_\d(_\d)?/i)[0].split("_")[0].replace("OS ", ""), n.Full_Release_Numeric = +userAgent.match(/OS (\d)?\d_\d(_\d)?/i)[0].replace("_", ".").replace("_", "").replace("OS ", ""), n
   }
}

function getDateFromHours(n) {
   n = n.split(":");
   let t = new Date;
   return new Date(t.getFullYear(), t.getMonth(), t.getDate(), ...n)
}

function notRegister() {
   Swal.fire({
      type: "error",
      title: "لطفا ثبت نام کنید و یا وارد حساب کاربری خود شوید",
      showCancelButton: !0,
      confirmButtonText: `ورود / عضویت`,
      cancelButtonText: "متوجه شدم"
   }).then(n => {
      if (n.value === !0) {
         $.cookie("ReturnUrl", window.location.pathname + window.location.search, {
            expires: 1,
            path: "/"
         });
         var t = `/Account/Register?collectionId=${$.cookie("collectionId")}&ReturnUrl=${window.location.pathname + window.location.search}`;
         window.location.href = t
      }
   })
}

function ShowMap() {
   $(".nav-link").removeClass("active");
   $("#map-tab").addClass("active");
   $("html, body").animate({
      scrollTop: 0
   }, "fast")
}

function calCount(n, t, i, r) {
   return i !== "deleteOtherBranch" ? parseInt($("#lblCountBasket-" + n).text()) + t > 0 ? ($("#btnMinus-" + n).removeClass("d-none"), $("#lblCountBasket-" + n).removeClass("d-none"), $("#btnPlusIcon-" + n).removeClass("fas"), $("#btnPlusIcon-" + n).addClass("far"), r ? $("#cardImageFooter-" + n).addClass("lgSelectableImageCard") : $("#cardItem-" + n).addClass("lgSelectableCard"), i === "viewItem" && ($("#btnMinusM-" + n).removeClass("d-none"), $("#lblCountBasketM-" + n).removeClass("d-none"), $("#btnPlusIconM-" + n).removeClass("fas"), $("#btnPlusIconM-" + n).addClass("far")), parseInt($("#lblCountBasket-" + n).text()) + t) : ($("#btnMinus-" + n).addClass("d-none"), $("#lblCountBasket-" + n).addClass("d-none"), $("#btnPlusIcon-" + n).addClass("fas"), $("#btnPlusIcon-" + n).removeClass("far"), r ? $("#cardImageFooter-" + n).removeClass("lgSelectableImageCard") : $("#cardItem-" + n).removeClass("lgSelectableCard"), i === "viewItem" && ($("#btnMinusM-" + n).addClass("d-none"), $("#lblCountBasketM-" + n).addClass("d-none"), $("#btnPlusIconM-" + n).addClass("fas"), $("#btnPlusIconM-" + n).removeClass("far")), parseInt($("#lblCountBasket-" + n).text()) + t) : 0
}

function viewItem(n) {
   $.ajax({
      url: `/Menu/ViewItem/${n.id}?menuId=${n.menuId}&isPar=true`,
      cache: !1,
      dataType: "html",
      success: function (n) {
         $(".modal-header").addClass("d-none");
         $("#modalFooter").hasClass("d-none") || $("#modalFooter").addClass("d-none");
         $(".modal-dialog").removeClass("modal-dialog-centered");
         $("#modalSpinner").addClass("d-none");
         $("#contentSpinner").removeClass("d-none");
         $("#modalBody").html(n)
      }
   })
}

function handleViewItem(n) {
   $("#exampleModal").modal();
   $("#modalSpinner").removeClass("d-none");
   $("#contentSpinner").addClass("d-none");
   $(".modal-dialog").addClass("modal-dialog-centered");
   var t = {
      id: n,
      collectionCode: $.cookie("collectionCode"),
      menuId: parseInt($.cookie("menuId")),
      isActiveSale: settingMenu.isActiveSale,
      isIncludeSubsets: settingMenu.isIncludeSubsets,
      isActivePurchaseNotes: settingMenu.isActivePurchaseNotes
   };
   settingMenu.IsSalesOfProductSubsets ? $.cookie("IsIncludeSubsets-" + n) === "isSubsets" ? $.ajax({
      url: `/Menu/SubsetsMenuItem?itemId=${n}&menuId=${$.cookie("menuId")}&collectionCode=${t.collectionCode}`,
      cache: !1,
      dataType: "html",
      success: function (n) {
         $(".modal-header").removeClass("d-none");
         $("#modalFooter").hasClass("d-none") || $("#modalFooter").addClass("d-none");
         $(".modal-title").text("");
         $("#modalSpinner").addClass("d-none");
         $("#contentSpinner").removeClass("d-none");
         $("#modalBody").html(n)
      }
   }) : $.cookie("IsIncludeSubsets-" + n) === "notSubsets" ? viewItem(t) : $.ajax({
      url: `/Menu/IsIncludeSubsets/${n}`,
      cache: !1,
      dataType: "json",
      success: function (i) {
         let r = new Date;
         i.success ? (r.setTime(r.getTime() + 9e5), $.cookie("IsIncludeSubsets-" + n, "isSubsets", {
            expires: r
         }), $.ajax({
            url: `/Menu/SubsetsMenuItem?itemId=${n}&menuId=${$.cookie("menuId")}&collectionCode=${t.collectionCode}`,
            cache: !1,
            dataType: "html",
            success: function (n) {
               $(".modal-header").removeClass("d-none");
               $("#modalFooter").hasClass("d-none") || $("#modalFooter").addClass("d-none");
               $(".modal-title").text("");
               $("#modalSpinner").addClass("d-none");
               $("#contentSpinner").removeClass("d-none");
               $("#modalBody").html(n)
            }
         })) : (r.setTime(r.getTime() + 9e5), $.cookie("IsIncludeSubsets-" + n, "notSubsets", {
            expires: r
         }), viewItem(t))
      }
   }) : viewItem(t)
}

function AfterIsSuccessAddToCard(n) {
   $.ajax({
      type: "POST",
      url: `/Order/CountOfCartItem?uniqId=${$.cookie("uniqId")}`,
      success: function (t) {
         $("#countOfCart").text(t);
         $("#countOfCart").removeClass("d-none");
         var i = calCount(n.itemId, n.count, n.ref, n.fa2x);
         $("#lblCountBasket-" + n.itemId).text(i);
         $("#lblCountBasketM-" + n.itemId).text(i);
         $("#shakeCard").addClass("animated");
         $("#shakeCard").addClass("shopshake");
         setTimeout(function () {
            $("#shakeCard").removeClass("shopshake")
         }, 1e3);
         n.ref === "foodNoteModal" && (console.log(window.location.pathname), window.location.pathname.includes("ViewCart") ? ($("#exampleModal").modal("hide"), location.href = `/Order/ViewCart/${$.cookie("menuId")}`) : $("#exampleModal").modal("hide"));
         n.ref === "viewCard" && (location.href = `/Order/ViewCart/${$.cookie("menuId")}`)
      }
   })
}

function AddToCardAll(n) {
   var i = [],
      t = $.cookie("uniqId"),
      r;
   (t === null || t == undefined) && (t = uuidv4(), $.cookie("uniqId", t, {
      expires: 360,
      path: "/"
   }));
   n.ref === "foodNoteModal" && $("[name=inputcheckfoodNote]").each(function () {
      if ($(this).prop("checked") == !0) {
         var n = {
            FoodNoteId: parseInt($(this).attr("myid")),
            Count: 1
         };
         i.push(n)
      }
   });
   r = {
      ItemId: n.itemId,
      MenuId: parseInt($.cookie("menuId")),
      Count: n.count,
      CollectionId: parseInt($.cookie("collectionId")),
      FoodNote: i,
      IsViewCart: !0,
      UniqId: t
   };
   n.fa2x ? ($(n.element).prop("disabled", !0), $(n.element).html(`<div class="spinner-border mb-1"></div>`)) : ($(n.element).prop("disabled", !0), $(n.element).html(`<div class="spinner-border spinner-border-sm mb-1"></div>`));
   $.ajax({
      type: "POST",
      url: "/Order/AddToCart",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(r),
      dataType: "json",
      success: function (i) {
         if (i.success) return $(n.element).html(n.beforeHtml), $(n.element).prop("disabled", !1), AfterIsSuccessAddToCard(n), !0;
         i.handleExeption === 1 ? ($(n.element).html(n.beforeHtml), $(n.element).prop("disabled", !1), Swal.fire({
            type: "error",
            title: i.responseText,
            showCancelButton: !0,
            confirmButtonText: `بله`,
            cancelButtonText: "انصراف"
         }).then(i => {
            i.value === !0 && $.ajax({
               type: "POST",
               url: `/Order/DeleteOtherBranchOrder?uniqId=${t}`,
               success: function (t) {
                  t.success ? Swal({
                     type: "success",
                     title: t.responseText,
                     showConfirmButton: !1,
                     timer: 1e3
                  }).then(() => {
                     n.ref = "deleteOtherBranch", AfterIsSuccessAddToCard(n)
                  }) : Swal({
                     type: "error",
                     title: t.responseText,
                     showConfirmButton: !1,
                     timer: 2e3
                  })
               }
            })
         })) : Swal({
            type: "error",
            title: i.responseText,
            showConfirmButton: !1,
            timer: 2e3
         })
      }
   })
}

function FoodNoteManager(n) {
   $.ajax({
      url: `/Menu/IsIncludeFoodNote/${n.itemId}`,
      cache: !0,
      dataType: "json",
      success: function (t) {
         let i = new Date;
         t.success && n.count !== -1 ? ($("#exampleModal").modal(), $("#modalSpinner").removeClass("d-none"), $("#contentSpinner").addClass("d-none"), $(".modal-dialog").addClass("modal-dialog-centered"), i.setTime(i.getTime() + 9e5), $.cookie("IsIncludeFoodNote-" + n.itemId, "isInclude", {
            expires: i
         }), $.ajax({
            url: `/Menu/FoodNote?menuItemId=${n.itemId}&collectionCode=${$.cookie("collectionCode")}`,
            cache: !0,
            dataType: "html",
            success: function (t) {
               $(".modal-header").removeClass("d-none");
               $(".modal-title").text("");
               $("#modalSpinner").addClass("d-none");
               $("#contentSpinner").removeClass("d-none");
               $("#modalBody").html(t);
               $("#modalFooter").removeClass("d-none");
               $("#modalFooter").html(`  <button type="button" class="btn btn-secondary" data-dismiss="modal">خروج</button>
    <button type="button" class="btn btn-default" onclick="handleAddToCard(${n.itemId}, 1,'foodNoteModal',this,false)">اضافه به سبد خرید</button>`)
            }
         })) : AddToCardAll(n)
      }
   })
}

function SalesOfProductSubsets(n) {
   $.ajax({
      url: `/Menu/IsIncludeSubsets/${n.itemId}`,
      cache: !1,
      dataType: "json",
      success: function (t) {
         let i = new Date;
         t.success ? ($("#exampleModal").modal(), $("#modalSpinner").removeClass("d-none"), $("#contentSpinner").addClass("d-none"), $(".modal-dialog").addClass("modal-dialog-centered"), i.setTime(i.getTime() + 9e5), $.cookie("IsIncludeSubsets-" + n.itemId, "isSubsets", {
            expires: i
         }), $.ajax({
            url: `/Menu/SubsetsMenuItem?itemId=${n.itemId}&menuId=${$.cookie("menuId")}&collectionCode=${$.cookie("collectionCode")}`,
            cache: !1,
            dataType: "html",
            success: function (n) {
               $(".modal-header").removeClass("d-none");
               $("#modalFooter").hasClass("d-none") || $("#modalFooter").addClass("d-none");
               $(".modal-title").text("");
               $("#modalSpinner").addClass("d-none");
               $("#contentSpinner").removeClass("d-none");
               $("#modalBody").html(n)
            }
         })) : n.isFoodNote ? FoodNoteManager(n) : AddToCardAll(n)
      }
   })
}

function handleAddToCard(n, t, i, r, u = true) {
   if ($.cookie("isAuth") === "true" || settingCollection.IsRegistrationBeforeAddOrder === !1) {
      var f = {
         itemId: n,
         count: t,
         isFoodNote: settingMenu.IsActiveSaleFoodNote,
         ref: i,
         beforeHtml: $(r).html(),
         element: r,
         fa2x: u
      };
      i === "foodNoteModal" ? AddToCardAll(f) : settingMenu.IsSalesOfProductSubsets ? SalesOfProductSubsets(f) : settingMenu.IsActiveSaleFoodNote ? FoodNoteManager(f) : AddToCardAll(f)
   } else notRegister()
}

function ShowFeedBack() {
   settingMenu.IsActiveCreateFeedback && settingMenu.IsActiveFeedback && ($("#feedBackBt").removeClass("d-none"), setTimeout(function () {
      $("#feedBackBt").removeClass("btn-35")
   }, 1e3), setTimeout(function () {
      $("#feedBackBt").addClass("btn-35");
      $("#txtfeedBack").remove()
   }, 6e3), $("#loadFeedBack").load("/feedback/LoadFeedBack/" + $.cookie("menuId")))
}

function feedbackShow() {
   $("#exampleModal").modal();
   $("#modalSpinner").removeClass("d-none");
   $("#contentSpinner").addClass("d-none");
   $(".modal-dialog").addClass("modal-dialog-centered");
   $.ajax({
      url: "/feedback/LoadFeedBack/" + $.cookie("menuId"),
      cache: !1,
      dataType: "html",
      success: function (n) {
         $("#modalFooter").hasClass("d-none") || $("#modalFooter").addClass("d-none");
         $(".modal-dialog").removeClass("modal-dialog-centered");
         $("#modalSpinner").addClass("d-none");
         $("#contentSpinner").removeClass("d-none");
         $("#modalBody").html(n);
         $("body").hasClass("sidemenu-open") === !0 && $("body").removeClass("sidemenu-open")
      }
   })
}

function TranslateLogo() {
   settingCollection.IsActiveTranslate === !0 && $("#translateLogo").removeClass("d-none")
}

function CheckCloseMenu() {
   settingMenu.IsActiveSale && $.ajax({
      url: `/Order/CheckCloseMenu?menuId=${$.cookie("menuId")}`,
      dataType: "json",
      success: function (n) {
         if (!n.success) {
            var t = document.getElementById("alertCloseMenu");
            t.classList.remove("d-none")
         }
      }
   })
}

function btnGoGroup(n) {
   var t = document.getElementById("gr" + n);
   t.scrollIntoView({
      behavior: "smooth",
      block: "center"
   });
   $.ajax({
      type: "POST",
      url: `/Menu/AddMenuGroupVisit/` + n,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function () {}
   });
   $("#collapsLine").hasClass("w-75") && ($("#collapsLine").removeClass("w-75"), $(".swiper-pagination").addClass("d-none"), $(".fixed-topMenuGroup").css("height", "150px"), swiper.destroy(), params.slidesPerColumn = 1, initSwiper(params))
}

function btnGoItem(n) {
   var t = document.getElementById("cardItem-" + n);
   t.scrollIntoView({
      behavior: "smooth",
      block: "center"
   })
}

function GetBasketInMenu(n = "") {
   ($.cookie("isAuth") === "true" || settingCollection.IsRegistrationBeforeAddOrder === !1) && (settingMenu.IsActiveSale || settingMenu.IsActivePurchaseNotes) && $.ajax({
      url: `/Order/GetBasketInMenu?uniqId=${$.cookie("uniqId")}`,
      dataType: "json",
      success: function (t) {
         let i = 0;
         t.success && $.each(t.data, function () {
            $("#countOfCart").removeClass("d-none");
            $(`#btnMinus${n}-${this.itemId}`).removeClass("d-none");
            $(`#lblCountBasket${n}-${this.itemId}`).removeClass("d-none");
            $(`#btnPlusIcon${n}-${this.itemId}`).removeClass("fas");
            $(`#btnPlusIcon${n}-${this.itemId}`).addClass("far");
            $(`#lblCountBasket${n}-${this.itemId}`).text(this.qty);
            $("#cardImageFooter-" + this.itemId).addClass("lgSelectableImageCard");
            $("#cardItem-" + this.itemId).addClass("lgSelectableCard");
            i += this.qty
         });
         $("#countOfCart").text(i)
      }
   })
}

function queryParamExistUrl() {}

function viewLanguage() {
   $("#exampleModal").modal();
   $("#modalSpinner").removeClass("d-none");
   $("#contentSpinner").addClass("d-none");
   $(".modal-dialog").addClass("modal-dialog-centered");
   $.ajax({
      url: "/Home/ViewChangeLanguage/" + $.cookie("collectionId"),
      cache: !1,
      dataType: "html",
      success: function (n) {
         $(".modal-header").addClass("d-none");
         $("#modalFooter").hasClass("d-none") || $("#modalFooter").addClass("d-none");
         $(".modal-dialog").addClass("modal-dialog-centered");
         $("#modalSpinner").addClass("d-none");
         $("#contentSpinner").removeClass("d-none");
         $("#modalBody").html(n)
      }
   })
}

function handleChangeLang(n, t) {
   $.ajax({
      url: `/Home/ChangeLanguage?culture=${n}&lng=${t}`,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (n) {
         var i, r;
         n.isTranslate ? ($.cookie("isTranslate", "yes"), i = document.documentElement.lang, window.location = `#googtrans(${i}|${t})`, location.reload()) : ($.cookie("isTranslate", "no"), r = window.location.href.replace(/#.*$/, ""), window.location.href = r)
      }
   })
}

function viewCallWaiter(n = 0) {
   n === 0 && (n = $.cookie("tableId"));
   $("#exampleModal").modal();
   $("#modalSpinner").removeClass("d-none");
   $("#contentSpinner").addClass("d-none");
   $.ajax({
      url: `/CallWaiter/ViewCallWaiter?tableId=${n}&collectionCode=${$.cookie("collectionCode")}`,
      cache: !1,
      dataType: "html",
      success: function (n) {
         $(".modal-header").addClass("d-none");
         $("#modalFooter").hasClass("d-none") || $("#modalFooter").addClass("d-none");
         $(".modal-dialog").addClass("modal-dialog-centered");
         $("#modalSpinner").addClass("d-none");
         $("#contentSpinner").removeClass("d-none");
         $("#modalBody").html(n)
      }
   })
}

function SelectTable() {
   $("#exampleModal").modal();
   $("#modalSpinner").removeClass("d-none");
   $("#contentSpinner").addClass("d-none");
   $(".modal-dialog").addClass("modal-dialog-centered");
   $.ajax({
      url: `/CallWaiter/SelectTable/${$.cookie("menuId")}`,
      cache: !1,
      dataType: "html",
      success: function (n) {
         $(".modal-header").addClass("d-none");
         $("#modalFooter").hasClass("d-none") || $("#modalFooter").addClass("d-none");
         $(".modal-dialog").addClass("modal-dialog-centered");
         $("#modalSpinner").addClass("d-none");
         $("#contentSpinner").removeClass("d-none");
         $("#modalBody").html(n)
      }
   })
}

function addReservation() {
   $.cookie("isAuth") === "true" ? settingMenu.ReservationHasAnOrder !== !0 ? location.href = `/Reservation/AddReservation/${$.cookie("menuId")}` : Swal.fire({
      type: "warning",
      text: "رزرو میز فقط با ثبت سفارش انجام میشود، لطفا سبد خرید خود را تکمیل کنید سپس به سبد خرید => ادامه فرایند خرید => رزرو میز ، مراجعه کنید",
      showCancelButton: !0,
      showConfirmButton: !1,
      cancelButtonText: "متوجه شدم"
   }) : notRegister()
}

function viewOnMap(n) {
   $.ajax({
      url: `/Order/ViewCourierOnMap/${n}`,
      cache: !1,
      dataType: "html",
      success: function (n) {
         $("#root").html(n)
      }
   })
}

function repeatOrder(n) {
   Swal.fire({
      title: "در صورت داشتن سفارش باز ، سفارش باز قبلی شما حذف میشود آیا مطمئن هستید؟",
      text: "تکرار سفارش",
      type: "warning",
      showCancelButton: !0,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "انصراف",
      confirmButtonText: "بله انجام شود!"
   }).then(t => {
      t.value && $.ajax({
         url: `/Order/RepeatOrder/${n}`,
         cache: !1,
         dataType: "json",
         success: function (n) {
            n.success ? location.href = "/order/ViewCart/" + $.cookie("menuId") : Swal({
               type: "error",
               title: "عملیات با شکست مواجه شد",
               showConfirmButton: !1,
               timer: 1e3
            })
         }
      })
   })
}

function GetAmountWallet(n) {
   $.ajax({
      url: `/Order/GetWalletAmount?menuId=${n}`,
      dataType: "json",
      cache: !1,
      success: function (n) {
         n.success && (document.getElementById("walletAmount").innerHTML = "(" + n.wallet.toLocaleString() + " ریال )")
      }
   })
}

function ViewReservation() {
   $.cookie("isAuth") === "true" ? $.ajax({
      url: `/Reservation/ExistReservation/${$.cookie("menuId")}`,
      cache: !1,
      dataType: "json",
      success: function (n) {
         n.success ? window.location.href = `/Reservation/ViewReservations/${$.cookie("menuId")}` : addReservation()
      }
   }) : notRegister()
}

function goToHome() {
   parseInt($.cookie("MenusCount")) > 1 ? $.ajax({
      url: "/Menu/viewMenu/" + $.cookie("collectionId"),
      cache: !1,
      dataType: "html",
      success: function (n) {
         $("#root").html(n)
      }
   }) : parseInt($.cookie("MenusCount")) === 1 ? $.ajax({
      url: `/Menu/ViewMenuItems?menuId=${$.cookie("menuId")}&collectionId=${$.cookie("collectionId")}`,
      cache: !1,
      dataType: "html",
      success: function (n) {
         $("#root").html(n)
      }
   }) : parseInt($.cookie("MenusCount")) === 0 && $.ajax({
      url: "/Menu/emptyMenu",
      cache: !1,
      dataType: "html",
      success: function (n) {
         $("#root").html(n)
      }
   });
   $("body").hasClass("sidemenu-open") === !0 && $("body").removeClass("sidemenu-open")
}

function ViewGallery() {
   $.ajax({
      url: "/content/ViewGallery",
      cache: !1,
      dataType: "html",
      success: function (n) {
         $("#root").html(n)
      }
   });
   $("body").hasClass("sidemenu-open") === !0 && $("body").removeClass("sidemenu-open")
}

function support() {
   $.ajax({
      url: "/Dashboard/Support/ViewSupport?isPartial=true",
      cache: !1,
      dataType: "html",
      success: function (n) {
         $("#root").html(n);
         $("html, body").animate({
            scrollTop: 0
         }, "fast")
      }
   });
   $("body").hasClass("sidemenu-open") === !0 && $("body").removeClass("sidemenu-open")
}

function InviteFriends() {
   $("#exampleModal").modal();
   $("#modalSpinner").removeClass("d-none");
   $("#contentSpinner").addClass("d-none");
   $(".modal-dialog").addClass("modal-dialog-centered");
   $.ajax({
      url: `/Account/InviteFriends`,
      cache: !1,
      dataType: "html",
      success: function (n) {
         $(".modal-header").removeClass("d-none");
         $(".modal-title").text(" لینک دعوت از دوستان");
         $("#modalFooter").hasClass("d-none") || $("#modalFooter").addClass("d-none");
         $(".modal-dialog").removeClass("modal-dialog-centered");
         $("#modalSpinner").addClass("d-none");
         $("#contentSpinner").removeClass("d-none");
         $("#modalBody").html(n);
         $("body").hasClass("sidemenu-open") === !0 && $("body").removeClass("sidemenu-open")
      }
   })
}

function uuidv4() {
   return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16))
}
var userAgent;
const settingMenu = JSON.parse($.cookie("SettingMenu")),
   settingCollection = JSON.parse($.cookie("SettingCollection"));
if (window.history && window.history.pushState) $(window).on("popstate", function () {
   $(".modal").hasClass("show") && $(".modal").modal("hide")
});
userAgent = navigator.userAgent;
var iOS = iOS_version(),
   CookieExpiryTimeNew = {
      END_OF_SESSION: 0,
      SECOND: 1e3,
      MINUTE: 6e4,
      HOUR: 36e5,
      DAY: 864e5,
      WEEK: 6048e5,
      MOUNTH: 2592e6,
      MOUNTH3: 7776e6,
      MOUNTH6: 15552e6,
      YEAR: 31536e6,
      NEVER: 63072e7
   },
   Cookie = {
      Set: function (n, t, i, r) {
         var f = "",
            u;
         i && (u = new Date, u.setTime(u.getTime() + i), f = "; expires=" + u.toGMTString());
         r || (r = "/");
         document.cookie = n + "=" + t + f + "; path=" + r
      },
      Get: function (n) {
         for (var r = n + "=", t = "", u = document.cookie.split(";"), i = 0; i < u.length; i++)
            if (t = String(u[i]).trim(), t.indexOf(r) === 0) return t.substring(r.length, t.length);
         return null
      },
      Unset: function (n) {
         this.Set(n, "", -1)
      }
   };
userAgent.includes("Instagram") ? userAgent.match(/(\(iPod|\(iPhone|\(iPad)/) ? $("#inline_contentInsIos").removeClass("d-none") : userAgent.includes("Android") && ($("#inline_contentInsCh").removeClass("d-none"), setTimeout(function () {
   document.getElementById("theAnchor").href = window.location.href;
   document.getElementById("theAnchor").click()
}, 3e3)) : userAgent.match(/(\(iPod|\(iPhone|\(iPad)/) && (iOS.Major_Release_Numeric < 13 ? $.cookie("ShowIosHelper") != "Yes" && (window.navigator.standalone == !1 ? $("#inline_content").removeClass("d-none") : $.cookie("ShowIosHelper", "Yes", {
   expires: 1e3
})) : $.cookie("ShowIosHelper") != "Yes" && (window.navigator.standalone == !1 ? $("#inline_contentIos13").removeClass("d-none") : $.cookie("ShowIosHelper", "Yes", {
   expires: 1e3
})));
$("#MobileHelperCloseInsCh").click(function () {
   $("#inline_contentInsCh").addClass("d-none")
});
$("#MobileHelperCloseInsIos").click(function () {
   $("#inline_contentInsIos").addClass("d-none")
});
$("#MobileHelperClose").click(function () {
   $("#inline_content").addClass("d-none");
   $.cookie("ShowIosHelper", "Yes", {
      expires: 1e3
   })
});
$("#MobileHelperCloseIos").click(function () {
      $("#inline_contentIos13").addClass("d-none");
      $.cookie("ShowIosHelper", "Yes", {
         expires: 1e3
      })
   }),
   function (n, t, i) {
      if (i in t && t[i]) {
         var r, u = n.location,
            f = /^(a|html)$/i;
         n.addEventListener("click", function (n) {
            for (r = n.target; !f.test(r.nodeName);) r = r.parentNode;
            "href" in r && (r.href.indexOf("http") || ~r.href.indexOf(u.host)) && (n.preventDefault(), u.href = r.href)
         }, !1)
      }
   }(document, window.navigator, "standalone");
$(".fa-heart").click(n => {
   n.preventDefault(), n.stopPropagation(), $.cookie("isAuth") === "true" ? $.ajax({
      type: "POST",
      url: "/Feedback/CreateLike/" + $(n.target).attr("itemid"),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (t) {
         t ? $.getJSON(`/Feedback/GetCounOfLikeMenuItemId?menuItemId=${$(n.target).attr("itemid")}`, function (t) {
            $("#countOfLike-" + $(n.target).attr("itemid")).text(t.data)
         }) : Swal({
            type: "error",
            title: "عملیات با شکست مواجه شد",
            showConfirmButton: !1,
            timer: 1e3
         })
      }
   }) : notRegister()
});
$(".addToCard").click(n => {
   n.preventDefault(), n.stopPropagation()
});
$("#myorders-tab").click(function () {
   $.ajax({
      url: `/content/ContactUs?menuId=${$.cookie("menuId")}&isMenu=true&isPar=true`,
      cache: !0,
      dataType: "html",
      success: function (n) {
         $("#myorders").html(n)
      }
   })
});
$(document).ready(function () {
   if ($.cookie("isAuth") === "false" && settingCollection.IsRegistrationBeforeAddOrder === !0 && ($("#A-cardLoading").attr("href", `javascript:void(0)`), $("#A-cardLoading").attr("onclick", "notRegister()")), setTimeout(function () {
         $(".demo-container").fadeOut("slow")
      }, 500), TranslateLogo(), $(window).scroll(function n() {
         return $(window).scrollTop() > 370 ? ($("#fixMenu").css({
            position: "fixed",
            top: "60px"
         }), $("#fixMenu").addClass("footer-tabs"), $("#logoHeaderDiv").removeClass("d-none")) : ($("#fixMenu").css({
            position: "relative",
            top: "auto"
         }), $("#fixMenu").removeClass("footer-tabs"), $("#logoHeaderDiv").addClass("d-none")), n
      }()), new URLSearchParams(window.location.search).get("collectionCode").toLocaleLowerCase() === "mymenu") {
      var t = document.getElementById("customeColorHiDigiMenu");
      t.classList.remove("d-none")
   }
   setTimeout(function () {
      $(".toast").toast("show")
   }, 2e3);
   $(".add").on("click", function () {
      var n = parseInt($(this).closest(".increasenumber").find("input").val());
      $(this).closest(".increasenumber").find("input").val(n + 1)
   });
   $(".remove").on("click", function () {
      if ($(this).closest(".increasenumber").find("input").val() > 0) {
         var n = parseInt($(this).closest(".increasenumber").find("input").val());
         $(this).closest(".increasenumber").find("input").val(n - 1)
      }
   });
   setTimeout(function () {
      GetBasketInMenu()
   }, 1e3);
   setTimeout(function () {
      settingMenu.IsCheckDailyInventory && settingMenu.IsActiveSale && $.ajax({
         url: `/Order/CheckDailyDeliveryAllMenuItems/${$.cookie("menuId")}`,
         dataType: "json",
         success: function (n) {
            n.success && $.each(n.data, function () {
               this.isAvailable || ($("#finish-" + this.itemId).removeClass("d-none"), $("#notFinish-" + this.itemId).addClass("d-none"))
            })
         }
      });
      settingMenu.IsShowFeedback && settingMenu.IsActiveFeedback && ($.ajax({
         url: `/Feedback/GetRatingStars/${$.cookie("menuId")}`,
         dataType: "json",
         cache: !1,
         success: function (n) {
            n.success && $.each(n.data, function () {
               $("#ratingStars-" + this.itemId).html(this.value.toFixed(1))
            })
         }
      }), $.ajax({
         url: `/Feedback/GetCounOfLike/${$.cookie("menuId")}`,
         dataType: "json",
         success: function (n) {
            n.success && $.each(n.data, function () {
               $("#countOfLike-" + this.itemId).html(this.value)
            })
         }
      }))
   }, 3e3);
   $("#autFilter").autocomplete({
      source: `/Search?menuId=${$.cookie("menuId")}&collectionId=${$.cookie("collectionId")}`,
      minLength: 2,
      select: function (n, t) {
         return $("#autFilter").val(t.item.label), handleViewItem(t.item.value), btnGoItem(t.item.value), !1
      }
   });
   $.cookie("navbarDropdownCheck") !== "true" && $("#navbarDropdownUser").addClass("pulse-button");
   $("#navbarDropdownUser").click(function () {
      $.cookie("navbarDropdownCheck", "true", {
         expires: 180,
         path: "/"
      });
      $("#navbarDropdownUser").removeClass("pulse-button")
   });
   $.cookie("isTranslate") === "yes" && $("html").attr("translate", "yes")
});
$(".sidebar").on("click", function () {
   $("body").removeClass("sidemenu-open")
});
$("#darklayout").on("click", function () {
   $(this).parent().addClass("active");
   $(this).is(":checked") ? ($.cookie("darklayout", "darklayout", {
      expires: 1
   }), $("body").addClass("dark"), $("#darklayout").parent().addClass("active")) : ($.removeCookie("darklayout", ""), $("body").removeClass("dark"), $("#darklayout").parent().removeClass("active"))
})