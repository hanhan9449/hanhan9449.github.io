import styl from "./PreviewPage.module.scss";
import { Button, Toast } from "@douyinfe/semi-ui";
import { IconRefresh, IconCopy } from "@douyinfe/semi-icons";
import copy from 'copy-to-clipboard'
import {useState} from 'react'

export function PreviewPage({ src, width, height }) {
    const [show, setShow] = useState(true)
    function handleCopy() {
        copy(src)
        Toast.success('复制成功')
    }
    function handleRefresh() {
        setShow(false)
        setTimeout(() => setShow(true))
        Toast.info('刷新中，请等待')
    }
  return (
    <div className={styl.container}>
        <div className={styl.nav}>
        
        
        <div><span className={styl.userSelectNone}>Preview: </span>{src}</div>
        <div>

       
        <Button icon={<IconRefresh/>} onClick={handleRefresh}/>
        <Button icon={<IconCopy/>} onClick={handleCopy}/>
        </div>
        </div>
        <hr></hr>
      {show && <iframe src={src} width={width} height={height} />} 
    </div>
  );
}
