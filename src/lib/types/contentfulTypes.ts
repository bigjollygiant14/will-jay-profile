import { Document } from '@contentful/rich-text-types'

export interface TagType {
  id: string;
  name: string;
}

export interface ResumeItemType {
  sys: {
    id: string
  }
  companyName: string;
  jobTitle: string;
  categories: string[];
  description: {
    json: Document;
  };
  descriptionExtended: {
    json: Document;
  }
  dateStarted: string;
  dateEnded: string;
  contentfulMetadata: {
    tags: TagType[]
  }
}