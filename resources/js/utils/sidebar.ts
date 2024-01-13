

class Sidebar {

    private perfix = "/app";

    setSingleMenu = (title: string, icon: string, link: string, can?: string) => {
        return {
            "title": title,
            "type": 'single',
            "icon": icon,
            "link": this.perfix + link,
            "can": can,
        }
    }
    setMultiMenu = (title: string, icon: string, can?: string, sub_menu?: any) => {
        return {
            "title": title,
            "icon": icon,
            "can": can,
            "type": "multi",
            "sub_menu": sub_menu, // Initialize an empty array for sub-menu
        }
    }
    setSubMenu = (title: string, link: string, can?: string) => {
        return {
            "title": title,
            "link": this.perfix + link,
            "can": can,
        }
    }
    setHeadingMenu = (title: string) => {
        return {
            "title": title,
            "type": "heading",
        }
    }
    getMenuList = () => {
        return [

            this.setHeadingMenu('Analytics'),
            this.setMultiMenu('Dashboards', 'fa-solid fa-house', 'dashboard-view',
                [
                    this.setSubMenu('Dashboard', '/home', 'somePermission'),
                    // Add more sub-menu items as needed
                ],
            ),
            this.setMultiMenu('Reports', 'fa-solid fa-chart-line', 'reports-views',
                [


                    this.setSubMenu('Sales Order', '/reports/sales-order', 'somePermission'),
                    this.setSubMenu('Customers', '/reports/customers', 'somePermission'),


                    // Add more sub-menu items as needed
                ],
            ),

         

        this.setSingleMenu('Log out', 'fa-solid fa-power-off', '/logout'),




        ];
    }

}

export default Sidebar;
