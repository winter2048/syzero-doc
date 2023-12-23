import { Flex, Tabs } from "antd";
import IconFont from "../../../../components/icon-font";

function Setting(  props: {
  title: string;
}) {
  return (
    <Flex className="sy-content">
      <div className="sy-content-title">
        <h3>{props.title}</h3>
      </div>
    </Flex>
  );
}

export default Setting;
