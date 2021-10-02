import MainMenu from './MainMenu';
import AssignDemo from './components/AssignDemo';
import AwaitandAsync from './components/AwaitandAsync';
import InputdemoRef from './components/InputdemoRef';
import InputdemoState from './components/InputdemoState';
import JsonDatause from './components/JsonDatause';
import ObjectStatechange from './components/ObjectStatechange';
import SetStatedome from './components/SetStatedemo';
import TableUse from './components/TableUse';
import CopytoClipboard from './components/CopytoClipboard';
import TableSortingandscreening from './components/TableSortingandscreening';
import ObjectPush from './components/ObjectPush';
import TablefieldFuzzyQuery from './components/TablefieldFuzzyQuery';
import SwitchChange from './components/SwitchChange';
import Parent from './ValueTransmission/Parent';
import ExportExcel from './components/ExportExcel'
// routes数组中存储着所有的路由配置，每一个路由配置都是一个对象
const routes=[
    {path:'/MainMenu',component:MainMenu},
    {path:'/AssignDemo',component:AssignDemo},
    {path:'/AwaitandAsync',component:AwaitandAsync},
    {path:'/InputdemoRef',component:InputdemoRef},
    {path:'/InputdemoState',component:InputdemoState},
    {path:'/JsonDatause',component:JsonDatause},
    {path:'/ObjectPush',component:ObjectPush},    
    {path:'/ObjectStatechange',component:ObjectStatechange},
    {path:'/SetStatedome',component:SetStatedome},
    {path:'/TableUse',component:TableUse},
    {path:'/CopytoClipboard',component:CopytoClipboard},
    {path:'/TableSortingandscreening',component:TableSortingandscreening},
    {path:'/TablefieldFuzzyQuery',component:TablefieldFuzzyQuery},
    {path:'/SwitchChange',component:SwitchChange},
    {path:'/Parent',component:Parent},
    {path:'/ExportExcel',component:ExportExcel},
]
export default routes