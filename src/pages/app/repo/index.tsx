import React, { useState } from "react";
import { Flex, Tooltip, Tree, Dropdown, Space, Button } from "antd";
import IconFont from "../../../components/icon-font";
import type { DataNode, TreeProps } from "antd/es/tree";
import {
  SmallDashOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import "../../../style/Repo.css";

const x = 3;
const y = 2;
const z = 1;
const defaultData: DataNode[] = [];

const generateData = (
  _level: number,
  _preKey?: React.Key,
  _tns?: DataNode[]
) => {
  const preKey = _preKey || "0";
  const tns = _tns || defaultData;

  const children: React.Key[] = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

function Setting() {
  const [gData, setGData] = useState(defaultData);
  const [expandedKeys] = useState(["0-0", "0-0-0", "0-0-0-0"]);

  const onDragEnter: TreeProps["onDragEnter"] = (info) => {
    console.log(info);
    // expandedKeys, set it when controlled is needed
    // setExpandedKeys(info.expandedKeys)
  };

  const onDrop: TreeProps["onDrop"] = (info) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (
      data: DataNode[],
      key: React.Key,
      callback: (node: DataNode, i: number, data: DataNode[]) => void
    ) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children!, key, callback);
        }
      }
    };
    const data = [...gData];

    // Find dragObject
    let dragObj: DataNode;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
      });
    } else if (
      ((info.node as any).props.children || []).length > 0 && // Has children
      (info.node as any).props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar: DataNode[] = [];
      let i: number;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i!, 0, dragObj!);
      } else {
        ar.splice(i! + 1, 0, dragObj!);
      }
    }
    setGData(data);
  };

  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <Flex className="sy-content">
      <div className="sy-repo-left">
        <div className="sy-content-title">
          <h3>知识库</h3>
        </div>
        <div className="sy-repo-left-tree">
          <Tree
            className="sy-tree"
            defaultExpandedKeys={expandedKeys}
            draggable
            blockNode
            onDragEnter={onDragEnter}
            onDrop={onDrop}
            treeData={gData}
          />
        </div>
      </div>
      <div className="sy-repo-right">
        <div className="sy-repo-right-head">
          <div className="sy-repo-right-head-title">树莓派安装.NET 6.0</div>
          <div className="sy-repo-right-head-tools">
            <Tooltip title="分享">
              <Button icon={<ShareAltOutlined />}  />
            </Tooltip>
            <Tooltip title="新建">
              <Button icon={<PlusOutlined />}  />
            </Tooltip>
            <Dropdown menu={{ items }}>
            <Button icon={<IconFont type="icon-qita" />}/>
            </Dropdown>
          </div>
        </div>
        <div className="sy-repo-right-content">
          <h3>ssssssssss</h3>
        </div>
      </div>
    </Flex>
  );
}

export default Setting;
