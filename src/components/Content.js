import React, { Component } from 'react'
import data from '../react-i-ii-afternoon/data'
import People from './People'

export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            people: data,
            index: 0
        }

        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
    }

    handleNext() {
        this.setState({ index: this.state.index + 1 })
    }

    handlePrev() {
        this.setState({ index: this.state.index - 1 })
    }




    render() {
        const next = 'Next >'
        const prev = '< Previous'

        return (
            <div className='body'>
                <div className='content'> <People info={this.state.people[this.state.index]} /></div>
                <div className='buttons'>
                    <button onClick={this.handlePrev} className='prev'>{prev}</button>
                    <div className='blue-btn'>
                        <button className='blue'>Edit</button>
                        <button className='blue'>Delete</button>
                        <button className='blue'>New</button>
                    </div>
                    <button onClick={this.handleNext} className='next'>{next}</button>
                </div>
            </div>

        )
    }
}