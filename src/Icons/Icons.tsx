import React from 'react';
import { Karma, KarmaIcons } from './post-longread/Karma';
import { Comments, CommentsIcons } from './post-longread/Comments';
import { Share, ShareIcons } from './post-longread/Share';
import { Save, SaveIcons } from './post-longread/Save';
import { Report, ReportIcons } from './post-longread/Report';
import { Hide, HideIcons } from './post-longread/Hide';
import { Message, MessageIcons } from './post-longread/Message';
import { Close, CloseIcons } from './post-longread/Close';
import { Search, SearchIcons } from './search/Search';
import { Best, BestIcons } from './sort/Best';
import { New, NewIcons } from './sort/New';
import { Top, TopIcons } from './sort/Top';
import { Hot, HotIcons } from './sort/Hot';
import { Rising, RisingIcons } from './sort/Rising';
import { Arrow, ArrowIcons } from './sort/Arrow';
import { AddContact, AddContactIcons } from './commentForm/AddContact';
import { Attach, AttachIcons } from './commentForm/Attach';
import { Paint, PaintIcons } from './commentForm/Paint';
import { RecordVoice, RecordVoiceIcons } from './commentForm/RecordVoice';
import {
  AttachDocument,
  AttachDocumentIcons,
} from './commentForm/AttachDocument';
import { AttachImage, AttachImageIcons } from './commentForm/AttachImage';
import { AttachPdf, AttachPdfIcons } from './commentForm/AttachPdf';
import { Citation, CitationIcons } from './commentForm/Citation';
import { Copy, CopyIcons } from './commentForm/Copy';
import { CopyText, CopyTextIcons } from './commentForm/CopyText';
import { Download, DownloadIcons } from './commentForm/Download';
import { FormatText, FormatTextIcons } from './commentForm/FormatText';
import { Update, UpdateIcons } from './commentForm/Update';

interface IconsProps {
  block:
    | KarmaIcons
    | CommentsIcons
    | ShareIcons
    | SaveIcons
    | ReportIcons
    | HideIcons
    | MessageIcons
    | CloseIcons
    | SearchIcons
    | BestIcons
    | NewIcons
    | TopIcons
    | HotIcons
    | RisingIcons
    | ArrowIcons
    | AddContactIcons
    | AttachIcons
    | PaintIcons
    | RecordVoiceIcons
    | AttachDocumentIcons
    | AttachImageIcons
    | AttachPdfIcons
    | CitationIcons
    | CopyIcons
    | CopyTextIcons
    | DownloadIcons
    | FormatTextIcons
    | UpdateIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export {
  KarmaIcons,
  CommentsIcons,
  ShareIcons,
  SaveIcons,
  ReportIcons,
  HideIcons,
  MessageIcons,
  CloseIcons,
  SearchIcons,
  BestIcons,
  NewIcons,
  TopIcons,
  HotIcons,
  RisingIcons,
  ArrowIcons,
  AddContactIcons,
  AttachIcons,
  PaintIcons,
  RecordVoiceIcons,
  AttachDocumentIcons,
  AttachImageIcons,
  AttachPdfIcons,
  CitationIcons,
  CopyIcons,
  CopyTextIcons,
  DownloadIcons,
  FormatTextIcons,
  UpdateIcons,
};

export function Component({
  block,
  svgClassName,
  svgPathClassName,
}: IconsProps): React.ReactElement {
  switch (block) {
    case KarmaIcons.up:
      return (
        <Karma
          block={KarmaIcons.up}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case KarmaIcons.down:
      return (
        <Karma
          block={KarmaIcons.down}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case CommentsIcons.postMenu:
    case CommentsIcons.postControlBar:
    case CommentsIcons.longreadControlBar:
    case CommentsIcons.shortreadControlBar:
    case CommentsIcons.commentControlBar:
      return (
        <Comments
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case ShareIcons.postMenu:
    case ShareIcons.longreadControlBar:
    case ShareIcons.shortreadControlBar:
    case ShareIcons.commentControlBar:
      return (
        <Share
          block={ShareIcons.postMenu}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case ShareIcons.postControlBar:
      return (
        <Share
          block={ShareIcons.postControlBar}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case SaveIcons.longreadControlBar:
    case SaveIcons.shortreadControlBar:
    case SaveIcons.postMenu:
      return (
        <Save
          block={SaveIcons.postMenu}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case SaveIcons.postControlBar:
      return (
        <Save
          block={SaveIcons.postControlBar}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case ReportIcons.postMenu:
    case ReportIcons.postControlBar:
    case ReportIcons.longreadControlBar:
    case ReportIcons.shortreadControlBar:
    case ReportIcons.commentControlBar:
      return (
        <Report
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case HideIcons.postMenu:
    case HideIcons.postControlBar:
    case HideIcons.longreadControlBar:
    case HideIcons.shortreadControlBar:
      return (
        <Hide
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case MessageIcons.message:
      return (
        <Message
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case CloseIcons.longreadHeader:
    case CloseIcons.shortreadHeader:
      return (
        <Close
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case SearchIcons.searchBlock:
      return (
        <Search
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case BestIcons.sort:
      return (
        <Best
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case NewIcons.sort:
      return (
        <New
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case TopIcons.sort:
      return (
        <Top
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case HotIcons.sort:
      return (
        <Hot
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case RisingIcons.sort:
      return (
        <Rising
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case ArrowIcons.sort:
      return (
        <Arrow
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case AddContactIcons.commentForm:
      return (
        <AddContact
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case AttachIcons.commentForm:
      return (
        <Attach
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case PaintIcons.commentForm:
      return (
        <Paint
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case RecordVoiceIcons.commentForm:
      return (
        <RecordVoice
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case AttachDocumentIcons.commentForm:
      return (
        <AttachDocument
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case AttachImageIcons.commentForm:
      return (
        <AttachImage
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case AttachPdfIcons.commentForm:
      return (
        <AttachPdf
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case CitationIcons.commentForm:
      return (
        <Citation
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case CopyIcons.commentForm:
      return (
        <Copy
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case CopyTextIcons.commentForm:
      return (
        <CopyText
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case DownloadIcons.commentForm:
      return (
        <Download
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case FormatTextIcons.commentForm:
      return (
        <FormatText
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
    case UpdateIcons.commentForm:
      return (
        <Update
          block={block}
          svgClassName={svgClassName}
          svgPathClassName={svgPathClassName}
        />
      );
  }
}
