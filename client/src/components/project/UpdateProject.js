import React, { Component } from 'react'
import { getProject, createProject } from '../../actions/projectActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';


class UpdateProject extends Component {
    
    constructor() {
        super();
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     if (nextProps.errors) {
    //         this.setState({ errors: nextProps.errors });
    //     }
    // }

    static getDerivedStateFromProps(props, state) {

        let errors = {};

        if (JSON.stringify(props.errors) !== '{}') {
            errors = props.errors;
        }

        let {
            id,
            projectName,
            projectIdentifier,
            desc,
            startDate,
            endDate
        } = props.project;

        if (state.projectName !== props.projectName) projectName = state.projectName;
        if (state.projectIdentifier !== props.projectIdentifier) desc = state.desc;
        if (state.startDate !== props.startDate) startDate = state.startDate;
        if (state.endDate !== props.endDate) endDate = state.endDate;

        return ({ id, projectName, projectIdentifier, desc, startDate, endDate, errors });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProject(id, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.props.project[e.target.name] = e.target.value;
        if (this.props.errors[e.target.name] !== undefined){
            this.props.errors[e.target.name] = '';
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const updateProject = {
            id: this.state.id,
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            desc: this.state.desc,
            start_date: this.state.startDate,
            end_date: this.state.endDate
        };

        this.props.createProject(updateProject, this.props.history);
    }

    render() {

        const { errors } = this.state;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create / Edit Project form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.projectName
                                        })}
                                        placeholder="Project Name"
                                        name="projectName"
                                        //value={this.state.projectName || ''}
                                        value={this.props.project.projectName || ''}
                                        onChange={this.onChange}
                                    />
                                    {errors.projectName && (
                                        <div className="invalid-feedback">{errors.projectName}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.projectIdentifier
                                        })}
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        //value={this.state.projectIdentifier || ''}
                                        value={this.props.project.projectIdentifier || '' }
                                        onChange={this.onChange}
                                        disabled />
                                    {errors.projectIdentifier && (
                                        <div className="invalid-feedback">{errors.projectIdentifier}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.desc
                                        })}
                                        placeholder="Project Description"
                                        name="desc"
                                        //value={this.state.desc || ''}
                                        value={this.props.project.desc || ''}
                                        onChange={this.onChange}
                                    ></textarea>
                                    {errors.desc && (
                                        <div className="invalid-feedback">{errors.desc}
                                        </div>
                                    )}
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="startDate"
                                        //value={this.state.startDate || ''}
                                        value={this.props.project.startDate || ''}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="endDate"
                                        //value={this.state.endDate || ''}
                                        value={this.props.project.endDate || ''}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
        this.state.errors = {};
    }
}

UpdateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const matchStateToProps = state => ({
    project: state.project.project,
    errors: state.errors
})

export default connect(matchStateToProps, { getProject, createProject })(UpdateProject);
