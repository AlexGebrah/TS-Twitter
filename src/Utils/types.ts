export type User = Record<'name' | 'avatar', string>;

export type Stat = Record<'followers' | 'following', number>;

export interface TwitContextValue {
    user: User,
    setUser: (user: (oldInfo: User) => {name: string, avatar: string}) => void,
    stats: Stat
    setStats: (stats: (oldInfo: Stat) => { followers: number; following: number }) => void
}