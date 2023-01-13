import React from 'react';
import styles from './postcontrols.module.styl';
import noop from '../../utils/noop';
import Karma from './Karma';
import Comments from './Comments';
import Share from './Share';
import Save from './Save';
import Report from './Report';
import Hide from './Hide';
import Close from './Close';
import AddContact from './AddContact';
import Attach from './Attach';
import Copy from './Copy';
import Paint from './Paint';
import AttachDocument from './AttachDocument';
import AttachImage from './AttachImage';
import AttachPdf from './AttachPdf';
import Citation from './Citation';
import CopyText from './CopyText';
import Download from './Download';
import FormatText from './FormatText';
import RecordVoice from './RecordVoice';
import Update from './Update';

interface PostLongreadControlsProps {
  id?: string;
  As:
    | 'Karma'
    | 'Comments'
    | 'Share'
    | 'Save'
    | 'Report'
    | 'Hide'
    | 'Close'
    | 'AddContact'
    | 'Attach'
    | 'Copy'
    | 'Paint'
    | 'AttachDocument'
    | 'AttachImage'
    | 'AttachPdf'
    | 'Citation'
    | 'CopyText'
    | 'Download'
    | 'FormatText'
    | 'RecordVoice'
    | 'Update';
  view:
    | 'post-control-bar'
    | 'post-menu'
    | 'post-body'
    | 'longread-header'
    | 'longread-control-bar'
    | 'shortread-control-bar'
    | 'comment-form'
    | 'comment-control-bar'
    | 'shortread-header';
  count?: number;
  onClick?: (event: React.MouseEvent | MouseEvent) => void;
}

export function PostLongreadControls({
  id,
  As,
  view,
  onClick,
  count,
}: PostLongreadControlsProps): React.ReactElement {
  switch (As) {
    case 'Comments':
      if (
        view === 'post-menu' ||
        view === 'post-control-bar' ||
        view === 'longread-control-bar' ||
        view === 'shortread-control-bar' ||
        view === 'comment-control-bar'
      ) {
        return (
          <Comments
            id={id}
            commonStyles={styles}
            view={view}
            numComments={count}
            onClick={onClick}
          />
        );
      } else {
        return <></>;
      }
    case 'Share':
      if (
        view === 'post-menu' ||
        view === 'post-control-bar' ||
        view === 'longread-control-bar' ||
        view === 'shortread-control-bar' ||
        view === 'comment-control-bar'
      ) {
        return <Share commonStyles={styles} view={view} />;
      } else {
        return <></>;
      }
    case 'Save':
      if (
        view === 'post-menu' ||
        view === 'post-control-bar' ||
        view === 'shortread-control-bar' ||
        view === 'longread-control-bar'
      ) {
        return <Save commonStyles={styles} view={view} />;
      } else {
        return <></>;
      }
    case 'Report':
      if (
        view === 'post-menu' ||
        view === 'post-control-bar' ||
        view === 'longread-control-bar' ||
        view === 'shortread-control-bar' ||
        view === 'comment-control-bar'
      ) {
        return <Report commonStyles={styles} view={view} />;
      } else {
        return <></>;
      }
    case 'Hide':
      if (
        view === 'post-menu' ||
        view === 'post-control-bar' ||
        view === 'shortread-control-bar' ||
        view === 'longread-control-bar'
      ) {
        return <Hide commonStyles={styles} view={view} />;
      } else {
        return <></>;
      }
    case 'Karma':
      if (
        view === 'post-control-bar' ||
        view === 'post-body' ||
        view === 'longread-header' ||
        view === 'shortread-header'
      ) {
        return <Karma commonStyles={styles} view={view} karma={count} />;
      } else {
        return <></>;
      }
    case 'Close':
      if (view === 'longread-header' || view === 'shortread-header') {
        return <Close commonStyles={styles} view={view} onClick={onClick} />;
      } else {
        return <></>;
      }
    case 'AddContact':
      if (view === 'comment-form') {
        return (
          <AddContact commonStyles={styles} view={view} onClick={onClick} />
        );
      } else {
        return <></>;
      }
    case 'Attach':
      if (view === 'comment-form') {
        return <Attach commonStyles={styles} view={view} onClick={onClick} />;
      } else {
        return <></>;
      }
    case 'Copy':
      if (view === 'comment-form') {
        return <Copy commonStyles={styles} view={view} onClick={onClick} />;
      } else {
        return <></>;
      }
    case 'Paint':
      if (view === 'comment-form') {
        return <Paint commonStyles={styles} view={view} onClick={onClick} />;
      } else {
        return <></>;
      }
    case 'AttachDocument':
      if (view === 'comment-form') {
        return (
          <AttachDocument commonStyles={styles} view={view} onClick={onClick} />
        );
      } else {
        return <></>;
      }
    case 'AttachImage':
      if (view === 'comment-form') {
        return (
          <AttachImage commonStyles={styles} view={view} onClick={onClick} />
        );
      } else {
        return <></>;
      }
    case 'AttachPdf':
      if (view === 'comment-form') {
        return (
          <AttachPdf commonStyles={styles} view={view} onClick={onClick} />
        );
      } else {
        return <></>;
      }
    case 'Citation':
      if (view === 'comment-form') {
        return <Citation commonStyles={styles} view={view} onClick={onClick} />;
      } else {
        return <></>;
      }
    case 'CopyText':
      if (view === 'comment-form') {
        return <CopyText commonStyles={styles} view={view} onClick={onClick} />;
      } else {
        return <></>;
      }
    case 'Download':
      if (view === 'comment-form') {
        return <Download commonStyles={styles} view={view} onClick={onClick} />;
      } else {
        return <></>;
      }
    case 'FormatText':
      if (view === 'comment-form') {
        return (
          <FormatText commonStyles={styles} view={view} onClick={onClick} />
        );
      } else {
        return <></>;
      }
    case 'RecordVoice':
      if (view === 'comment-form') {
        return (
          <RecordVoice commonStyles={styles} view={view} onClick={onClick} />
        );
      } else {
        return <></>;
      }
    case 'Update':
      if (view === 'comment-form') {
        return <Update commonStyles={styles} view={view} onClick={onClick} />;
      } else {
        return <></>;
      }
  }
}
