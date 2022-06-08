import {Component} from 'react'

const styles = {
    layout: {
        backgroundColor: '#fff',
        colrol: '0A283',
        alignItems: 'center',
        display: 'flex',
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div>
                    {this.props.children}
                </div>                
            </div>
        )
    }
}

export default Layout