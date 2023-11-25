import {getCustomMDXComponent} from '@rspress/theme-default'
const Code = getCustomMDXComponent()?.code
const Pre = getCustomMDXComponent()?.pre


export function PreviewCode({code, lang}) {
    if (!(Code && Pre)) {
        return null
    }

    return (
        <Pre>
            <Code className={`language-${lang}`}>{code}</Code>
        </Pre>
    )
}