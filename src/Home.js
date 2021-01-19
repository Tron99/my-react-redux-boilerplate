import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { LoginForm, FormItem ,PasswordInput,TextInput,CheckBoxInput} from './styledComponents';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const Home = (props) => {

    useEffect(() => {
        console.log("propsHere", props.pageTitle)
    })
    return (
        <LoginForm  {...layout}>
            <FormItem
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <TextInput />
            </FormItem>

            <FormItem
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <PasswordInput />
            </FormItem>
            <FormItem {...tailLayout} name="remember" valuePropName="checked">
                <CheckBoxInput>Remember me</CheckBoxInput>
            </FormItem>
            <FormItem {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </FormItem>

        </LoginForm>
    )

}

const mapStateToProps = state => {
    const { title } = state
    return {
        pageTitle: title
    }
}

export default connect(mapStateToProps, null)(Home);
