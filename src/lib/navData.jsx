import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Strona główna",
        link: "/"
    },
    {
        id: 1,
        icon: <TravelExploreIcon/>,
        text: "Panel ogłoszeń",
        link: "dashboard"
    },
    {
        id: 2,
        icon: <BarChartIcon/>,
        text: "Logowanie",
        link: "login"
    },
    {
        id: 3,
        icon: <SettingsIcon/>,
        text: "Rejestracja",
        link: "register"
    }
]