from db import db
from datetime import datetime

class Theme(db.Model):
    __tablename__ = 'theme'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    timestamp = db.Column(db.DateTime)

    subtheme = db.relationship('SubTheme', backref='theme', lazy=True)

    def __init__(self, name, timestamp=None):
        self.name = name
        if timestamp is None:
            timestamp = datetime.utcnow()

        self.timestamp = timestamp

    def __repr__(self):
        return 'Theme name: %s' % self.name

    def json(self):
        return {
            'id': self.id,
            'Name': self.name,
            'Timestamp': self.timestamp
        }

    def save(self):
        db.session.add(self)
        db.session.flush()

    def get_all(self):
        return Theme.query.all()


class SubTheme(db.Model):
    __tablename__ = 'subtheme'

    id = db.Column(db.Integer, primary_key=True)
    t_id = db.Column(db.Integer, db.ForeignKey('theme.id'), nullable=False)
    name = db.Column(db.String(255), unique=True, nullable=False)
    timestamp = db.Column(db.DateTime)

    # attributes = db.relationship('Attributes', backref='subtheme', lazy=True)

    def __init__(self, t_id, name, timestamp=None):
        self.t_id = t_id
        self.name = name

        if timestamp is None:
            timestamp = datetime.utcnow()

        self.timestamp = timestamp

    def __repr__(self):
        return 'Sub Theme Name: %s' % self.name

    def json(self):
        return {
            'id': self.id,
            'Theme id': self.t_id,
            'Name': self.name,
            'Timestamp': self.timestamp
        }
    
    def save(self):
        db.session.add(self)
        db.session.flush()

    def get_all(self):
        return SubTheme.query.all()

    def get_by_theme_id(self, theme_id):
        return SubTheme.query.filter_by(t_id=theme_id).all()
        
        