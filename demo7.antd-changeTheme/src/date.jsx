import React, { Component } from 'react'
import { DatePicker, Space } from 'antd';
import './date.css'

export default  class Date extends Component {
    onChange(date, dateString) {
        console.log(date, dateString);
    }
    render() {
        return (
            <div className="date_div">
                <div className="date_content">
                    <DatePicker onChange={this.onChange} picker="year" className="date_picker"/>
                    <DatePicker onChange={this.onChange} picker="month" className="date_picker"/>
                    <DatePicker onChange={this.onChange} picker="week" className="date_picker" />
                    <br /> <br /><br /><br />
                    <Space direction="vertical">
                        <DatePicker onChange={this.onChange} />
                        <DatePicker onChange={this.onChange} picker="quarter"/>
                    </Space>
                </div>
            </div>
        )
    }
}

