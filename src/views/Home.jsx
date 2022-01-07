import React from 'react'
import { NavBar, CharacterList, PageFrame } from "./../components";

export const Home = () => {
    return (
        <div>
            <NavBar />
            <PageFrame>
                <CharacterList />
            </PageFrame>
        </div>
    )
}
