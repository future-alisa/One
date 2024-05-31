import { Spin } from "antd";

const Loading = (props: { tip?: string }) => {
    return (
        <Spin tip={props.tip} size="large" className="request-loading" />
    )
}

export default Loading