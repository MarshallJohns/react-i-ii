import React, { Component } from 'react'

export default class People extends Component {
    constructor() {
        super()
    }

    render() {
        const content = this.props.info
        console.log(content.name)
        return (
            <div className='people'>
                <p className='position'><b>{`${content.id}`}/25</b></p>
                <h4 className='name'>{`${content.name.first} ${content.name.last}`}</h4>
                <p className='info'><b>From:</b> {`${content.city}, ${content.country}`}</p>
                <p className='info'><b>Job Title:</b> {content.title}</p>
                <p className='info'><b>Employer:</b> {content.employer}</p>
                <ol className='movies'>
                    <p><b>Favorite Movies:</b></p>
                    <li>{content.favoriteMovies[0]}</li>
                    <li>{content.favoriteMovies[1]}</li>
                    <li>{content.favoriteMovies[2]}</li>
                </ol>
            </div>
        )
    }
}