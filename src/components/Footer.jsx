function Footer({saveTask}){
    return <>
            {`You have 2 pending task`} <button onClick={()=>{saveTask([])}}>Clear All</button>
           </>
}
export default Footer;