import React, {useState} from "react";
import List from "./List";

function mapItems(items){
    return items.map(({id, name}) => ({id, name}));
}

function filterAndSort(data, text, asc){
    return data.filter(({id, name}) => text.length===0 || name.includes(text))
    .sort(asc 
        ? (a,b) => (b.id>a.id ? -1 : a === b ? 0 : 1)
        : (a,b) => (a.id>b.id ? -1 : a === b ? 0 : 1)
    );
}

export default function ListContainer(){
    const [asc, setAsc] = useState(true);
    const [filter, setFilter] = useState("");

    const [student, setStudent] = useState([
        {id: '1811063560', name: 'Nguyễn Minh Tiến'},
        {id: '1811061726', name: 'Lê Hoàng Bảo'},
        {id: '1811062910', name: 'Nguyễn Tiến Đạt'},
        {id: '1811063333', name: 'Lê Đức Nghị'},
        {id: '1711060012', name: 'Nguyễn Tuấn Anh'},
        {id: '1811060165', name: 'Trương Tấn Đạt'},
        {id: '1811062926', name: 'Nguyễn Xuân Hà'},
        {id: '1811062123', name: 'Lê Quang Hoàng'},
        {id: '1811062612', name: 'Ngô Minh Khỏe'},
        {id: '1811062962', name: 'Phùng Quốc Hùng'},
        {id: '1811062483', name: 'Vũ Đức Long'},
        {id: '1811063029', name: 'Trần Phát Long'},
        {id: '1811770007', name: 'Huỳnh Nguyễn Thành Đạt'},
        {id: '1811063087', name: 'Nguyễn Tấn Phúc'},
        {id: '1811061677', name: 'Trần Đình Quý'},
        {id: '1811063305', name: 'Trần Đình Trung'},
        {id: '1811063309', name: 'Phạm Anh Tuấn'},
        {id: '1811063271', name: 'Huỳnh Tấn Đạt'},
        {id: '1811062470', name: 'Phan Tấn Kiệt'},
        {id: '1811062630', name: 'Võ Duy Minh Nhựt'},
        {id: '1811063268', name: 'Nguyễn Ngọc Anh Duy'},
        {id: '1811063328', name: 'Hoàng Trọng Kiên'},
    ]);

    
    const [data, setData] = useState(
        filterAndSort(student, "")
    );

    return(
        <List data = {mapItems(data)}
        asc={asc}
        onFilter={text => {
            setFilter(text);
            setData(filterAndSort(data, text, asc));
        }}
        onSort={()=>{
            setAsc(!asc);
            setData(filterAndSort(data, filter, asc));
        }}
        />
    );
}
