'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { NavigationLink } from './NavigationLink'
import { NavigationNested } from './NavigationNested'

type Props = {
    navigation: []
}

export const NavigationItems = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    //Navigation object as prop
    const navigation = props.navigation

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    useEffect(() => {
        setIsMenuOpen(false) // close menu if path changes!
    }, [pathname])

    return (
        <>
            <div className="max-md:mb-10  md:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center gap-1 hover:text-accent"
                >
                    Menu
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </button>
            </div>
            <div
                data-ismenuopen={`${isMenuOpen}`}
                className="max-md:data-[ismenuopen=false]:max-h-0 max-md:data-[ismenuopen=true]:max-h-96  transition-all overflow-y-auto md:max-h-[calc(100vh_-_136px)]"
            >
                <div className="text-sm">
                    {navigation?.map((element) => {
                        return (
                            <div key={element.id} className="py-1.5">
                                <NavigationLink
                                    item={element}
                                    className="font-medium inline-block py-1"
                                />

                                {element.items && (
                                    <NavigationNested
                                        key={element.title}
                                        items={element.items}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}