import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface NavigationItem {
    name?: string
    icon?: IconDefinition
    color?: string
    path: string
    visible?: boolean
}
