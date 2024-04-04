export interface Tags {
    items?: (ItemsEntity)[] | null;
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}
interface ItemsEntity {
    collectives?: (CollectivesEntity)[] | null;
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    count: number;
    name: string;
}
interface CollectivesEntity {
    tags?: (string)[] | null;
    external_links?: (ExternalLinksEntity)[] | null;
    description: string;
    link: string;
    name: string;
    slug: string;
}
interface ExternalLinksEntity {
    type: string;
    link: string;
}

export interface QueryData {
    data: Tags | undefined;
    isLoading: boolean;
    error: Error | null;
}

export interface Row {
    name: string;
    count: number;
    id: number;
}
