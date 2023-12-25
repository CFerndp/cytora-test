import React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getIcon } from 'seti-icons';

import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import { Node } from '@/models/Node';

import { useFileSystem } from '@/components/TreeFile/hooks';

import * as S from './styles';

type TreeFileProps = {
  className?: string;
};

const renderTree = (nodes: Node[], onClickFile: (path: string) => void) =>
  nodes
    .sort((a, b) => {
      if ((a.isFile && b.isFile) || (!a.isFile && !b.isFile)) {
        // they are equal -> alphabetic order
        return a.name.localeCompare(b.name);
      } else {
        // not equal -> first files
        return a.isFile ? 1 : -1;
      }
    })
    .map(node => {
      if (node.isFile) {
        const { svg, color } = getIcon(node.name);

        return (
          <TreeItem
            key={node.name}
            nodeId={node.name}
            label={node.name}
            icon={
              <S.FileIcon
                fill={color}
                dangerouslySetInnerHTML={{ __html: svg }}
              />
            }
            data-testid={`file-${node.name}`}
            onClick={() => onClickFile(node.path)}
          />
        );
      }
      return (
        <TreeItem
          key={node.name}
          nodeId={node.name}
          label={node.name}
          data-testid={`folder-${node.name}`}>
          {renderTree(node.children || [], onClickFile)}
        </TreeItem>
      );
    });

export const TreeFile: React.FC<TreeFileProps> = ({ className }) => {
  const { rootNode, onClickFile } = useFileSystem();

  return (
    <S.TreeFile className={className} data-testid="tree-file">
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}>
        {renderTree(rootNode.children || [], onClickFile)}
      </TreeView>
    </S.TreeFile>
  );
};
