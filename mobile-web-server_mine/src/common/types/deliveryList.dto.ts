export interface DeliveryListDto {
    id?: number;
    name?: string;
    odeName?: string;
    effectiveDate?: string;
    attribute?: {
        isAnonymous?: boolean;
        isReadOnly?: boolean;
        isClusterDone?: boolean;
        isFirstRoutingDonㅠe?: boolean;
        isRouteEnabled?: boolean;
        isSendingRiderEnabled?: boolean;
        isProductCheckEnabled?: boolean;
        isOnDemandEnabled?: boolean;
        createFrom?: string;
        clusterRule?: string; 
        projectLoadingMode?: string;
        routeOption?: number;
    }
    vehicleId?: number;
    projectPushedAt?: string;
    createAt?: string;
    updateAt?: string;
}