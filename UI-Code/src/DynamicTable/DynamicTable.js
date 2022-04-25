import { useEffect } from "react";
function DynamicTable(tableData) {

    const column = []
    // if (tableData !== 0) {
    //     column = tableData.length !== 0 && Object.keys(tableData[0] || {});
    // }
    if (column) {
        //column = Object.keys(tableData[0]);
    } else {
        console.log('⛔️ Object is falsy');
    }
    const data = Object.keys(tableData)
    console.log(tableData)


    return (
        <table className="table">
            <thead>
                {column.length !== 0 && column.map((data) => {
                    return <th key={data}>{data}</th>
                }) }
            </thead>
            <tbody>
                {data.length !== 0 && data.map((data) => {
                    return (
                        <tr>
                            {
                                column.length !== 0 && column.map((v) => {
                                    return <td>{data[v]}</td>
                                })
                            }
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default DynamicTable;

/*
 const TableData=[
    {id:1, fullName:"Noor Khan", age:25, city:"Patna"},
    {id:2, fullName:"Rapsan Jani", age:26, city:"Noida"},
    {id:3, fullName:"Monika Singh", age:18, city:"New Delhi"},
    {id:4, fullName:"Sunil Kumar", age:22, city: "Jaipur"},
    {id:5, fullName:"Kajol Kumari", age: 21, city: "Chennai"}
]

  const [data, setData] = useState([{}])
  const [postdata, setPostdata] = useState([])
  const [excelData, setExcelData] = useState(TableData || [])
  const [sampleData, setSampleData] = useState([])
  useEffect(() => {
    fetch('/sample-route',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }).then(
      res => res.json()
    ).then(data => {
      setData(data)
      console.log(data)
    })

    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
     const body = {
       'title':'post Data',
       'body':'Vamshi'
     }

    axios.post('/data-post',body).then(data => {
      setPostdata(data.data)
      console.log(data.data,"PostData")
    })

  }, [])

  useEffect(() => {
    console.log("file upload")
    if(data.length!==0){
    axios.post('/data-post',excelData).then(data => {
      setPostdata(data.data)
      console.log(data.data,"PostData")
    })
  }

  }, [excelData])

  

  const onChange = (e) => {
    const [file] = e.target.files;
    
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames;
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      console.log(data);
      setExcelData(data)
    };
    reader.readAsBinaryString(file);
  };

  const handleFile = () => {
console.log("Entering")
//     /* Boilerplate to set up FileReader */
//     const reader = new FileReader();
//     const rABS = !!reader.readAsBinaryString;

//     reader.onload = (e) => {
//       console.log("inside reload")
//       /* Parse data */
//       const bstr = e.target.result;
//       const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
//       /* Get first worksheet */
//       const wsname = wb.SheetNames[1];
//       const ws = wb.Sheets[wsname];
//       /* Convert array of arrays */
//       const data = XLSX.utils.sheet_to_json(ws);
//       /* Update state */
//       //setData(data);
//       //setCols(make_cols(ws['!ref']))
//       //handleUploadFileData(data,fileName[0])
//       console.log(data)
//     };
//   }
// */