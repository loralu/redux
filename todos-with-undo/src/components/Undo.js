import React, {
	Component,
	PropTypes
} from 'react'



export default class Undo extends Component {
	render() {
		const {
			onUndo,
			onRedo,
			canUndo,
			canRedo
		} = this.props;
		return <div>
					<p>
						<button onClick={onUndo} disabled={!canUndo}>Undo</button>
						<button onClick={onRedo} disabled={!canRedo}>Redo</button>
					</p>
				</div>
	}
}

Undo.propTypes = {
	onUndo: PropTypes.func.isRequired,
	onRedo: PropTypes.func.isRequired,
	canUndo: PropTypes.bool.isRequired,
	canRedo: PropTypes.bool.isRequired
}