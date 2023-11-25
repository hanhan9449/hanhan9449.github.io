import {instance} from '@viz-js/viz'
import {useEffect, useMemo, useState} from 'react'
import {geneComponentTestProperty} from '@hanhan9449/utils'

function use(resource) {
    const [value, setValue] = useState(null)

    useEffect(() => {
        if (resource instanceof Promise) {
            resource.then(res => setValue(res))
        }
    }, []);
    return value
}

export function PreviewGraphviz({value}) {
    const _instance = use(instance())
    const [file, error] = useMemo(() => {
        try {
            let s = _instance?.renderSVGElement(value);
            return [s, null]
        } catch (e) {
            console.error(e)
            return [null, e]
        }
        return [s]
    }, [value, _instance]);
    if (error) {
        return <div>sorry, 渲染抱错了，错误见打印台</div>
    }
    return <div {...geneComponentTestProperty('preview-graphviz')} dangerouslySetInnerHTML={{
        __html: file?.outerHTML ?? ''
    }}></div>
}