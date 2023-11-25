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
    const file = useMemo(() => {
        let s = _instance?.renderSVGElement(value);
        return s
    }, [value, _instance]);
    return <div {...geneComponentTestProperty('preview-graphviz')} dangerouslySetInnerHTML={{
        __html: file?.outerHTML ?? ''
    }}></div>
}