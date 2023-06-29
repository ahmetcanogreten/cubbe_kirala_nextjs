export interface Post {
    id: number;
    user_id: string;
    type: string;
    has_cubbe: boolean;
    size: string | null;
    has_fular: boolean;
    color: string | null;
    image_url: string | null;
    description: string | null;
    created_at: Date;
};