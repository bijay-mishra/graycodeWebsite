import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// internal 
import htmlcontentservice from "@/src/service/htmlcontentservice";

const MobileMenus = () => {
  const [menu, setMenu] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [submenuStyles, setSubmenuStyles]=useState({})
  const submenuRefs=useRef({})
  const GetSiteMenu = async () => {
    var response = await htmlcontentservice.GetSiteMenu(1, 99, "Graycode-menu", "en");
    if (response.Code === 200) {
      setMenu(response.Data.MenuOutputVM);
    } else {
      setMenu([]);
    }
  };

  useEffect(() => {
    GetSiteMenu();
  }, []);

  const buildMenuTree = (menu) => {
    const menuMap = {};
    const rootItems = [];

    menu.forEach(item => {
      item.sub_menus = [];
      menuMap[item.Id] = item;
      if (item.ParentId === 0) {
        rootItems.push(item);
      } else if (menuMap[item.ParentId]) {
        menuMap[item.ParentId].sub_menus.push(item);
      }
    });

    return rootItems;
  };

  const menuTree = buildMenuTree(menu);
  const toggleSubMenu = (menuId) => {
    const currentHeight=submenuRefs.current[menuId]?.scrollHeight;
    const updatedStyles={...submenuStyles}
    if(openMenuId==menuId){
      updatedStyles[menuId]={maxHeight:0, transition:'max-height 0.3s ease-out'}
      setOpenMenuId(null)
    }else{
      updatedStyles[menuId]={maxHeight:`${currentHeight}px`,transition:'max-height 0.3s ease-in'}
      setOpenMenuId(menuId)
    }
    setSubmenuStyles(updatedStyles)
  };

  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menuTree.map((menu_item, i) => (
            <li
              key={i}
              className={`${menu_item?.sub_menus.length > 0 ? "has-dropdown" : ""}`}
            >
              <Link href={menu_item.Url}>
                <span></span>
                {menu_item.MenuName}
              </Link>
              {menu_item.sub_menus.length > 0 && (
                <>
                  <ul className="submenu" ref={el=>submenuRefs.current[menu_item.Id]=el} style={{  maxHeight: openMenuId === menu_item.Id ? submenuStyles[menu_item.Id]?.maxHeight : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease-out', }}>
                    {menu_item.sub_menus.map((sub_menu, j) => (
                      <li key={j}>
                        <Link href={sub_menu.Url}>
                          <span>{sub_menu.MenuName}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${openMenuId === menu_item.Id ? "mean-clicked" : ""}`}
                    onClick={() => toggleSubMenu(menu_item.Id)}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fa-regular fa-angle-down"></i>
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;



