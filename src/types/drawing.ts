type Point = [number, number];

interface ImageTransform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  relativeTo?: string;
}

interface PolygonTransform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface Polygon {
  vertices: Point[];
  polygonTransform: PolygonTransform;
}

interface Revision {
  versin: string;
  image: string;
  date: string;
  description: string;
  changes: string[];
  imageTransform?: ImageTransform;
  polygon: Polygon;
}

interface Region {
  polygon: Polygon;
  revisions: Revision[];
}

interface BaseDiscipline {
  image?: string;
  imageTransform?: ImageTransform;
  polygon?: Polygon;
  revisions: Revision[];
}

interface RegionDiscipline {
  image?: string;
  imageTransform?: ImageTransform;
  polygon?: Polygon;
  regions: Record<string, Region>;
}

type Discipline = BaseDiscipline | RegionDiscipline;

interface Position {
  vertices: Point[];
  imageTransform: ImageTransform;
}

interface Drawing {
  id: string;
  name: string;
  image: string;
  parent: string | null;
  position: Position | null;
  disciplines: Record<string, Discipline>;
}

export interface Metadata {
  project: {
    name: string;
    unit: string;
  };
  disciplines: { name: string }[];
  drawings: Record<string, Drawing>;
}

export type {
  Point,
  ImageTransform,
  PolygonTransform,
  Polygon,
  Revision,
  Region,
  Discipline,
  Drawing,
  Position,
};
