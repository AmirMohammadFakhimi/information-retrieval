import React from 'react'
import './Header.css'
import {AvatarGenerator} from "random-avatar-generator";

function Header() {
    const generator = new AvatarGenerator();

    return (
        <div id={'home-bar'}>
            <div id={'center'}>
                <img id={'avatar'} alt={'random avatar'} src={generator.generateRandomAvatar()}/>
                <div id={'bar-name'}>Welcome To Amoogle!</div>
            </div>
        </div>
    )
}

export default Header;