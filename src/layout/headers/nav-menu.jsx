
import Link from "next/link";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { useEffect, useState } from "react";

const NavMenu = () => {
  const [menu, setMenu] = useState([]);

  const GetSiteMenu = async () => {
    var response = await htmlcontentservice.GetSiteMenu(
      1,
      999,
      "Graycode-menu",
      "en"
    );
    if (response.Code == 200) {
      setMenu(response.Data.MenuOutputVM);
    } else {
      setMenu([]);
    }
  };

  useEffect(() => {
    GetSiteMenu();
  }, []);

  const buildMenuTree = (series) => {
    const menuMap = {};
    const rootItems = [];
    // debugger
    // console.log(series);

    // series.forEach(item => {
    //   console.log("Itme", item)
    //   item.sub_menus = [];
    //   menuMap[item.Id] = item;
    //   if (item.ParentId === 0) {
    //     rootItems.push(item);
    //   } else if (menuMap[item.ParentId]) {
    //     menuMap[item.ParentId].sub_menus.push(item);
    //   }
    // });
    const menu=[];
    const sortedData = series?.sort((a, b) => a.ParentId - b.ParentId);

    sortedData.forEach(item => {
    if (item.ParentId === 0) {
        menu.push({ ...item, sub_menus: [] });
    } else {
      // debugger;
        // Find the parent menu item and push to its subMenu
        const parent = menu.find(menuItem => menuItem.Id === item.ParentId);
        if (parent) {
            parent.sub_menus.push(item);
        }
    }
});

    return menu;
  };

  const menuTree = buildMenuTree(menu);
  

  return (
    <>
      <ul>
        {menuTree.map((menu_item, i) => (
          <li
            key={i}
            className={`${menu_item?.sub_menus.length > 0 && "has-dropdown"}`}
          >
            <Link href={menu_item.Url}>
              <span></span>
              {menu_item.MenuName}
            </Link>
            {menu_item.sub_menus.length > 0 && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, i) => {
                  
                  return (
                  <li key={i}>
                    <Link href={sub_menu.Url}>
                      <span>{sub_menu.MenuName}</span>
                    </Link>
                  </li>
                )})}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
